<?php
if ($_GET['sbsbuild']) {

}

if ($_GET['build']=='config') {
  $api=['paths'=>null];
  // $api = yaml_parse_file(__DIR__.'/../config.local.yml');
  $data = json_decode(preg_replace('/\xc2\xa0/i'," ",file_get_contents(__DIR__.'/data.json')),true);
  // die(yaml_emit($data));

  $stereotypes = [
    'Configuratie-elementen'=>'configuratie_element',
    'Variabelen'=>'variabele',
    'Bedieningen'=>'bediening',
    'Besturingen'=>'besturing',
    'Autonome processen'=>'autonoom_proces',
    'Besturing'=>'lfv',
  ];
  function toJS ($line) {
    $line = str_replace(['<>'],['!='], $line);
    $line = preg_replace('/(#|\b_)/','this.', $line);
    $line = preg_replace('/([^\. ]+)\[\]\.(.*)\)/','$1.every(function(){return $2;})', $line);
    $line = preg_replace('/([^\. ]+)\[\i\]\.(.*)\)/','$1.some(function(){return $2;})', $line);
    $line = preg_replace('/\.([^\. ]+)\.([^\. ]+)\[\i\] = ([^\s]+)/','.some(function(){return this.$1.$2;})', $line);
    $line = str_replace(['.this'],[''], $line);
    $line = preg_replace('/  /i',";\n", $line);
    $line = preg_replace('/  /i',' ', $line);
    return $line."\n";
  }
  function toST ($line, $name) {
    $line = preg_replace('/([^\. ]+)\[\]\.(.*)\)/','
    result := true;
    FOR count := 0 TO i BY 1 DO
      IF $2 THEN
        result := false;
        EXIT;
      END_IF;
    END_FOR;
    ', $line);
    $line = preg_replace('/([^\. ]+)\[\i\]\.(.*)\)/','
    result := false;
    FOR count := 0 TO i BY 1 DO
      IF $2 THEN
        result := true;
        EXIT;
      END_IF;
    END_FOR;
    ', $line);
    $line = preg_replace('/\.([^\. ]+)\.([^\. ]+)\[\i\] = ([^\s]+)/','
    result := false;
    FOR count := 0 TO i BY 1 DO
      IF $2 THEN
        result := true;
        EXIT;
      END_IF;
    END_FOR;
    ', $line);
    $line = preg_replace('/\s(#|\b_)/'," ".$name."_%d_", $line);
    $line = preg_replace('/(\.#|\._)/',"_", $line);
    $line = preg_replace('/(&&)/',' AND ', $line);
    $line = preg_replace('/(\|\|)/',' OR ', $line);
    $line = preg_replace('/\n /i',"\n", $line);
    // $line = preg_replace('/  /i',' ', $line);
    return $line."\n";
  }
  foreach ($data['requirements'] as $id => $req) {
    // if ($id != 'BSTTI#16855') continue;
    if (!in_array('Verkeerslichten',$req['path'])) continue;

    // if (in_array($key,$req['path']))

    foreach ($stereotypes as $key => $stereotype) {
      if (in_array($key,$req['path'])) {
        // die($stereotype);
        $lines = array_values(array_filter(explode("\n",$req['innerText'])));
        $path = $req['path'];
        array_pop($path);
        $schemaname = str_replace(' ','_',array_pop($path));
        if ($stereotype == 'lfv') {
          break;
          if (!strstr($req['innerText'],'toestandsvariabelen te hebben')) break;
          $req['description']=$req['innerText'];
          unset($req['innerHTML'],$req['innerText']);
          $api['components']['schemas'][$schemaname] = $req;
          break;
        }
        $enum = explode(':',array_shift($lines));
        $methodname = array_shift($enum);
        $enum = trim(array_shift($arr));
        $par = explode('(',$methodname);
        $methodname = array_shift($par);
        $par = rtrim(array_shift($par),')');
        $descr = explode("Conditie:",implode(" ",$lines));
        $init = explode("Init:",trim(array_shift($descr)));
        $description = array_shift($init);
        $init = trim(array_shift($init));
        $row = array_filter([
          'stereotype' => $stereotype,
          'type' => strstr($methodname,'[]') ? 'array' : null,
          'summary' => $methodname,
          'description' => $description,
          'enum' => empty($enum) ? null : array_map(function($val){return trim($val);},explode('|',trim($enum))),
          'bsttiName' => $methodname,
          'bsttiNr' => $req['id'],
          'bsttiInit' => $init,
          'bsttiPath' => $req['path'],
          'init()' => empty($init) ? null : toJS( "return $init\n"),
          'st()' => empty($init) ? null : toST( "IF init = 1 THEN\n$init\nEND_IF;", $schemaname),
        ]);
        $methodname = str_replace('[]','',$methodname);
        if (in_array($stereotype,['configuratie_element','variabele'])) {
          foreach ($descr as $val) {
            $val = explode("Waarde:",$val);
            $row['rules'][] = ['Conditie' => $conditie = trim($val[0]), 'Waarde' => $actie = trim($val[1]) ];
            // $row['logic'] = $row['logic'] ?: [];
            $actie = str_replace("  ",";\n",$actie);
            $row['st()'] = ($row['st()'] ?: '') . toST( in_array($conditie,['overige situaties','*']) ? $actie : "IF $conditie THEN\n\n$actie;\nEND_IF;", $schemaname);
            $conditie = str_replace("=","==",$conditie);
            $row['get()'] = ($row['get()'] ?: '') . toJS( in_array($conditie,['overige situaties','*']) ? "return $actie;" : "if ($conditie)\n{\nreturn $actie;\n}" );
          }
          $methodname = ucfirst(substr($methodname,1));
          $api['components']['schemas'][$schemaname]['properties'][$methodname] = $row;
        }
        else {
          $parameters = empty($par) ? [] : array_map(function($val){
            $val = explode(':',$val);
            return [
              'name' => $parNames[] = $parameterName = trim($val[0]),
              'in' => 'query',
              'description' => $parameterName,
              'required' => true,
              'schema' => strstr($val[1],'|')
              ? [
                'type' => 'array',
                'items' => [
                  'type' => 'string',
                  'enum' => $enum = array_map(function($val){ return trim($val);}, explode('|',$val[1])),
                  'default' => $enum[0],
                ]
              ]
              : [
                'type' => 'string',
              ]
            ];
          },explode(',',$par));
          if ($parameters) {
            $methodname .= '('.implode(',',array_map(function($val){ return $val['name'];},$parameters)).')';
          }
          array_unshift($parameters, [
            'name' => 'id',
            'in' => 'query',
            'description' => "Identifier of $schemaname",
            'required' => true,
            'schema' => [
              'type' => 'number',
            ]
          ]);
          $row ['parameters'] = $parameters;
          $row['operationId'] = "$schemaname(id).$methodname";
          foreach ($descr as $val) {
            $val = explode("Acties:",$val);
            // $row['rules'] = $row['rules'] ?: [];
            $row['rules'][] = ['Conditie' => $conditie = trim($val[0]), 'Acties' => $actie = trim($val[1]) ];
            $actie = str_replace("  ",";\n",$actie);
            $row['st()'] = ($row['st()'] ?: '') . toST( $conditie=='*' ? $actie : "IF $conditie THEN\n\n$actie;\nEND_IF;", $schemaname);
            $conditie = str_replace("=","==",$conditie);
            $actie = str_replace(":=","=",$actie);
            $row['js()'] = ($row['js()'] ?: '') . toJS( $conditie=='*' ? $actie : "if ($conditie)\n{\n$actie;\n}");
          }
          $methodname = lcfirst(str_replace('*','',$methodname));
          // $api['components']['schemas'][$schemaname]['operations'][$methodname] = $row;
          // $api['paths']['/'.str_replace([' ','-'],'_',strtolower(implode('/',$path)))."/$schemaname(id)/$methodname"]['post'] = $row;
          $api['paths']["/$schemaname(id)/$methodname"]['post'] = $row;
        }
        break;
      }
    }
  }
  ksort($api['paths']);
  ksort($api['components']['schemas']);
  die(yaml_emit($api));

  die(yaml_emit($api['components']['schemas']));
  yaml_emit_file($fname = __DIR__.'/webroot/config.yml', $api);
  readfile($fname);
  die();
}

if ($input = file_get_contents('php://input')) {
  file_put_contents('data.json',str_replace(['ï','¿','½'],'',$input));
}
die('done');
?>

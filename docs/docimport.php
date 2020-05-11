<?php
if ($input = file_get_contents('php://input')) {
  $data = json_decode($input,true);
  yaml_emit_file($_GET['fname'].'.yml',$data);
  // file_put_contents($_GET['fname'].'.json',str_replace(['ï','¿','½'],'',json_encode($input,JSON_PRETTY_PRINT,JSON_UNESCAPED_UNICODE,JSON_UNESCAPED_SLASHES)));
  file_put_contents($_GET['fname'].'.json',$content = json_encode($data,JSON_PRETTY_PRINT));
  die('SUCCESS'.$_GET['fname']);
}

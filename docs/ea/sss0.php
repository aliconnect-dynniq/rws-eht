<?php
$secret = json_decode(file_get_Contents($_SERVER['DOCUMENT_ROOT'].'/../secret.json'),true);
$eadb = sqlsrv_connect ($secret['rws_ea_eht']['server'],$secret['rws_ea_eht']['options']);
$res = sqlsrv_query ( $eadb,
"SELECT * FROM rws_ea_eht.dbo.t_package;
SELECT * FROM rws_ea_eht.dbo.t_diagram;
SELECT * FROM rws_ea_eht.dbo.t_object;
SELECT * FROM rws_ea_eht.dbo.t_connector;
");
while ($row = sqlsrv_fetch_object($res)) {
  $packages[$row->Package_ID] = $row;
  // if ($row->Parent_ID) $packages[$row->Parent_ID]->children[] = $packages[$row->Package_ID];
  $packages[$row->Parent_ID]->children[] = $packages[$row->Package_ID];
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $packages[$row->Package_ID]->diagram[] = $diagrams[$row->Diagram_ID] = $row;
  if ($row->ParentID) $diagrams[$row->ParentID]->children = $diagrams[$row->Diagram_ID];
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $packages[$row->Package_ID]->object[] = $objects[$row->Object_ID] = $row;
  if ($row->Diagram_ID) $diagrams[$row->Diagram_ID]->object = $diagrams[$row->Diagram_ID];
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $objects[$row->Start_Object_ID]->connector[] = $connectors[$row->Connector_ID] = $row;
}


function build($obj,$level) {
  echo "<h$level>$obj->name</h$level>";
}

build($packages[0]);


// die();
header('Content-Type: application/json');
die(json_encode($packages, JSON_PRETTY_PRINT));
?>

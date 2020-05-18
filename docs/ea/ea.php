<?php
$secret = json_decode(file_get_Contents($_SERVER['DOCUMENT_ROOT'].'/../secret.json'),true);
$eadb = sqlsrv_connect ($secret['rws_ea_eht']['server'],$secret['rws_ea_eht']['options']);
$res = sqlsrv_query ( $eadb,
"SELECT * FROM rws_ea_eht.dbo.t_package;
SELECT * FROM rws_ea_eht.dbo.t_diagram;
--select * from rws_ea_eht.dbo.t_diagramlinks
SELECT * FROM rws_ea_eht.dbo.t_diagramobjects ORDER BY RectTop DESC
SELECT * FROM rws_ea_eht.dbo.t_object;
select * from rws_ea_eht.dbo.t_objectrequires
SELECT * FROM rws_ea_eht.dbo.t_connector;

");
while ($row = sqlsrv_fetch_object($res)) {
  $data->package[$row->Package_ID] = $row;
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $data->diagram[$row->Diagram_ID] = $row;
}
// sqlsrv_next_result($res);
// while ($row = sqlsrv_fetch_object($res)) {
//   $data->diagram[$row->Diagram_ID] = $row;
// }
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $data->diagram[$row->Diagram_ID]->object[] = $row;
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $data->object[$row->Object_ID] = $row;
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $data->object[$row->Object_ID]->requires[] = $row;
}
sqlsrv_next_result($res);
while ($row = sqlsrv_fetch_object($res)) {
  $data->connector[$row->Connector_ID] = $row;
}
header('Content-Type: application/json');
die(json_encode($data, JSON_PRETTY_PRINT));
?>

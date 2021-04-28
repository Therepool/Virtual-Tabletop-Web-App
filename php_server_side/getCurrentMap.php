<?php
header('Access-Control-Allow-Origin: *');
$file = fopen("currentmap.config", "r");
$res = fgets($file);
fclose($file);
echo $res;
?>

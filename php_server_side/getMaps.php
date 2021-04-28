<?php
header('Access-Control-Allow-Origin: *');
$dir    = 'maps/';
$files = scandir($dir);

echo json_encode(array_slice($files, 2));
?>

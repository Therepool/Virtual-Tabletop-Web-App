<?php
header('Access-Control-Allow-Origin: *');
$dir    = '../../../tokens/';
$files = scandir($dir);

echo json_encode(array_slice($files, 2));
?>
<?php
header('Access-Control-Allow-Origin: *');
$file = fopen("currentmap.config", "w") or die("Error");
fwrite($file, $_GET['filename']);
fclose($file);
echo "Success";
?>

<?php
header('Access-Control-Allow-Origin: *');

$fileNo = 0;
while(file_exists("maps/" . $fileNo . ".png") || file_exists("maps/" . $fileNo . ".jpg")){
  $fileNo++;
}

$fileName = $_FILES["file"]['name'];
$ext = pathinfo($fileName, PATHINFO_EXTENSION);
$location = "maps/" . $fileNo . "." . $ext;
if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
  echo "Success";
}else{
  echo "Error";
}
?>

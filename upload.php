<?php
 $foto = $_FILES['pic'];
 $data = array('success' => false);

 if(copy($foto['tmp_name'],'ruta/'.$foto['name'])){
 $data = array('success' => true);
 }

 echo json_encode($data);
?>

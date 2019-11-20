<?php
header("Access-Control-Allow-Origin:*");
 include('./coon.php');



$username=$_REQUEST['u'];
$pass=$_REQUEST['p'];

$sql = "select * from user where user_name='$username'and user_pass='$pass'";
$result = $mysqli->query($sql); //执行查询语句


if($result->num_rows>0){
    
    echo 'true';
    
  
}else{
    echo 'false';
   
 
}   
$mysqli->close();
?>
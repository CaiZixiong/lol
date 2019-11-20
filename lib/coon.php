<?php
header('content-type:text/html;charset=utf-8');

$mysql_conf=array(
    'host'=>'localhost:3306',//地址
    'db_user'=>'root',//用户名
    'db_pass'=>'czx12345',//密码
    'db'=>'tianjia'//数据库名
);
//连接数据库
$mysqli= new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);


//判断是否连接
if($mysqli->connect_errno){
    die('连接错误'.$mysqli->connect_errno);
}
//设置查询字符集
$mysqli->query("set names utf8");
//选择数据库
$select_db=$mysqli->select_db($mysql_conf['db']);
//检查是否连接成功
if(!$select_db){
    die('数据库选择错误'.$mysqli->error);
}

?>

<?php
    include('./coon.php');
    //接收数据
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    $phone=$_REQUEST['phone'];
    //验证数据
    $sql = "select * from user where user_name='$username'";
    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo '{"msg":"用户名已存在"}';
        $mysqli->close();
        die;
    }
    //插入数据
    $insertSql="insert into user(user_name,user_pass,user_phone) values ('$username','$password','$phone')";
    $res=$mysqli->query($insertSql);
    if($res){
        echo '{"msg":"注册成功"}';
    }
    $mysqli->close();
?>

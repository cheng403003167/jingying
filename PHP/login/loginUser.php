<?php
	session_start();
	header("Content-Type:text/html;charset=utf8");
	$url = "localhost:3306";
	$root = "root";
	$pwd = "root";
	$con = @mysql_connect($url,$root,$pwd) or die("失败");
	mysql_select_db('jingyinglogon');
	mysql_query('set names utf8');
	$username = $_POST["username"];
	$pass = $_POST["pass"];
	$t = $_POST["t"];
	$code = $_POST["code"];
	$code2 = $_SESSION['check_code_number'];
	if($t == 1){
		$sql2 = "insert into `user`(`id`, `username`, `password`) values (null,'$username','$pass')";
		mysql_query($sql2);
	}else if($t == 0){
		if($code == $code2){
			$sql1 = "select * from `user` where `username` = '".$username."' and `password` = '".$pass."'";
			$result1 = mysql_query($sql1);
			if(mysql_num_rows($result1)>0){
				echo "ok";
			}else{
				echo "noUser";
			}
		}else{
			echo "noCode";
		}
	}
?>
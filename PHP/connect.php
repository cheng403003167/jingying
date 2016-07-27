<?php
	header('Content-Type:text/html;charset=utf8');
	$url = "localhost:3306";
	$root = "root";
	$pwd = "root";	
	$conn = @mysql_connect($url,$root,$pwd) or die("失败");
	mysql_select_db(jingyinglogon);
	mysql_query(set names utf8);
?>
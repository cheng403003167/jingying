<?php
	header("Content-Type:text/plain;");
	// echo "abcdddd";
	include_once("../connect.php");
	$sql = "select * from classDetail";
	$result = mysql_query($sql);
	$classlist = array();
	if(mysql_affected_rows()>0){
		while($row = mysql_fetch_assoc($result)){
			array_push($classlist,$row);
		}
	}
	echo json_encode($classlist);
?>
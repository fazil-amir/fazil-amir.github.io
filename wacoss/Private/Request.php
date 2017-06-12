<?php
		
	include_once 'Process.Class.php';

	$pro 					= new Process;

	if( isset($_POST['ticketData'] )) {

		$data 				= json_decode($_POST['ticketData'], true);

		$fileName			= $pro -> processTicketOrder($data);

		echo json_encode([
			'fileName' 		=> $fileName
		]);

	} else {
		header('location:../index.php');
	}


?>
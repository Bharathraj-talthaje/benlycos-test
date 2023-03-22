<?php 
	if (isset($_POST)) {

		$name=strip_tags($_POST['name']);
		$email=strip_tags($_POST['email']);
		$phone=strip_tags($_POST['phone']);

		$response_data=[
			'name'=>$name,
			'email'=>$email,
			'phone'=>$phone,
			'status'=>'success'
		]; 

		echo json_encode($response_data);

	}
 ?>
$(document).ready(function(){
	$(document).on('click','#register',function(){
		 var name=$.trim($('#name').val());
		 var email=$.trim($('#email').val());
		 var phone=$.trim($('#phone').val());
		 $('#response').html('');

		 if(name==''){
		 	$('#response').html('<div class="card">Please enter name</div>');
		 }else if(name.length<3){
		 	$('#response').html('<div class="card">Name must be greater than 3 charecter</div>');
		 }else if (email=='') {
		 	$('#response').html('<div class="card">Please enter an email</div>');
		 }else if(!validateEmail(email)){
		 	$('#response').html('<div class="card">Invalid email</div>');
		 }else{
		 	 $.ajax({
		        url: 'server.php',
		        type: 'POST',
		        data: $('#registerform').serialize(), 
		        dataType: "json",
		        success: function(result){ 
		            if (result.status=='success') {
		            	$('#registerform')[0].reset(), 
		            	$('#response').html('<div class="card bg-success">Done! <br> Saved result:<br>Name: '+result.name+'<br>Email:'+result.email+'<br>Phone: '+result.phone+'</div>');
		            }
		        }
		    });
		 }
	});


	function validateEmail($email) {
	  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	  return emailReg.test( $email );
	}
});

<!DOCTYPE html>
<html>
<head>
	<title>Test login validation</title>
	 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="validator.js"></script>
</head>
<body>
<form method="POST">
	<ul>
		<li><input type="text" id="username" name="username" placeholder="Username"></li>
		<li><input type="password" id="pass_w" name="pass" placeholder="Password"></li>
		<li><input type="submit" id="log" name="log" value="LOGIN"></li>
	</ul>
</form>
<script type="text/javascript">
	
$(function()
{
	log = validator;
	log.data['username'] = "#username";
	log.data['password'] = "#pass_w";

	$("#log").click(function()
	{
		log.validate_login("#mymodal","Username and password are required.");
		if(log.error == 0)
		{
			return true;
		} else {
			return false;
		}
	})
});	
	

</script>
<?php
include "modal_box.php";

?>
</body>
</html>
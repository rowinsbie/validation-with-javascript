/*
written by seiki rowins bie
email : seikirowins_bie@protonmail.com
location: Tarlac City, Philippines
*/

var validator =
{	
		error : false,
		data : [],
		validate_login : function(modal,mess)
		{
		var user = $(this.data['username']).val();
		var pass = $(this.data['password']).val();
		if(user == "" || pass == "")
		{
			$('.body-message').text(mess);
			$(modal).modal('show');
			this.error = true;
		} else {
			this.error = false;
		}
	},
		validate_file : function(err,mess,type)
		{
			var file = $(this.data['file']).val();
			var allowed;
			switch(type)
			{
				case 1:
					allowed  = /\.(gif|jpg|jpeg|tiff|png)$/i;
					break;
				case 2:
					allowed = /\.(pdf|epub|docx)$/i;
					break;
				default:
					alert("Invalid");
				return allowed;		
			}

			if(allowed.test(file))
			{
			
				this.error = false;
			} else {
				$(err).text(mess);
				this.error = true;
			}
		},
		check_pass_match : function(err,mess)
		{
			var p1 = $(this.data['pass_w']).val();
			var p2 = $(this.data['c_pass']).val();
			if(p1 != p2)
			{
				$(err).text(mess);
				this.error = true;
			} else {
			$(err).text("");
			}
		},
		validate_email : function(err,mess)
		{
			var email = $(this.data['email']).val();
			var regexp =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
			if(!regexp.test(email))
			{
				$(err).text(mess);
				this.error = true;
			} else {
				$(err).text("");
				this.error = false;
			}
		},
		check_input : function(key,err,mess)
		{
			var value = $(key).val();
			if(value == "")
			{
				$(err).text(mess);
				this.error = true;
			} else {
				
				$(err).text("");
				this.error = false;
			}
		}
		


}
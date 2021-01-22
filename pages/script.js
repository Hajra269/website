var mailFormat = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var passwordFormat = /^([a-zA-Z0-9.!@#\$%\^&\*])(?=.{7,})/;
var nameFormat = /^[A-Z]/;

function loginValidation(event)
{
	event.preventDefault();
	
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value
	
	if(email == "" | password == "")
	{
		alert("Please Enter email and password !");
		return false;
	}
	else
	{
		if(!email.match(mailFormat))
		{	
	        
			alert("Error:\n Please correct email format !");
		    form1.email.focus();
			return false;
					  
		   if(!password.length < 8) 
		    {
				alert("Error:\n Password must contain at least eight characters!");
				form1.password.focus();
				return false;
			}
			re = /[0-9]/;
			if(!re.test(form1.password.value))
			{
				alert("Error: \n password must contain at least one number (0-9)!");
				form1.password.focus();
				return false;
			}
			
			re = /[a-z]/;
            if(!re.test(form1.password.value))
			{
				alert("Error: \n password must contain at least one lowercase letter (a-z)!");
				form1.password.focus();
				return false;
			}
            
			re = /[A-Z]/;
			if(!re.test(form1.password.value))
			{
				alert("Error: \n password must contain at least one uppercase letter (A-Z)!");
				form1.password.focus();
				return false;
			}
		}
		else
			{
				window.location.href="../Home_page.html";
				return true;		
			}
	}
}
function ContactValidatation(email,name)
{
	var country = document.getElementById('country').value
	var subject = document.getElementById('subject').value
	
	if(name == "" |  email == "" | country == "" | message == "" | subject == "")
	{
		alert("Must fill all fields!");
		return false;
	}
	
    if(name.value.match(nameFormat))
		{
			if(email.value.match(mailFormat))
			{
				alert('Your record has been Submitted !');
				return true;
			}
			else
			{
				alert('Please Enter correct email format !');
				return false;
				
			}
		}
		else
		{
			alert('Name Should start with [A-Z]!');
			return false;
		}
		
}
function openSideBar()
{
    document.getElementById("side_bar2").style.width = "10%";
	document.getElementById("side_bar2").style.height = "83%";
	document.getElementById("side_bar").style.width = "0%";
	document.getElementById("side_bar").style.height = "0%";
	document.getElementById("body_container").style.width = "88%";
	document.getElementById("body_container").style.height = "83%";
	document.getElementById("text_area").style.width = "45%";
	document.getElementById("text_area").style.height = "90%";
	document.getElementById("pic_area").style.width = "50%";
	document.getElementById("pic_area").style.height = "90%";
}
 function closeSideBar()  
{  
	document.getElementById("side_bar2").style.width = "0%";
	document.getElementById("side_bar2").style.height = "0%";
	document.getElementById("side_bar").style.width = "15%";
	document.getElementById("side_bar").style.height = "83%";
	
	document.getElementById("body_container").style.width = "83%";
	document.getElementById("body_container").style.height = "83%";
	document.getElementById("text_area").style.width = "48%";
	document.getElementById("text_area").style.height = "90%";
	document.getElementById("pic_area").style.width = "46%";
	document.getElementById("pic_area").style.height = "90%";
}

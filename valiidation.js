function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    return (false)
}


function validateForm(){
	var firstName = document.forms["contact-form"]["firstName"].value;
	var lastName = document.forms["contact-form"]["lastName"].value;
	console.log(firstName);
	console.log(lastName);
	var email = document.forms["contact-form"]["email"].value;
	var message = document.forms["contact-form"]["message"].value;
	var phone = document.forms["contact-form"]["phone"].value;
	var phoneno = /^\d{10}$/;
	if(firstName===""){
		alert("First name cannot be empty");
		return false;
		}
	else if(lastName===""){
		alert("Last name cannot be empty");
		return false;
	}
	else if(validateEmail(email) == false){
		alert("Please enter a valid email address!");
		return false;
	}
	else if(!(phoneno.test(phone))){
		alert("Must enter valid phone number!");
		return false;
	}
	else if(message===""){
		alert("Hey, you forgot to put in some text to send!");
		return false;
	}
	else{
		alert("Form has been submitted");
}
}

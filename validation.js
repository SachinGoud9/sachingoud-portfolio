function validateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
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
	console.log(email);
	console.log(message);
	console.log(phone);
	var phoneno = /^\d{10}$/;
	if(firstName===""){
		alert("First name cannot be empty");
		return false;
	}
	else if(lastName===""){
		alert("Last name cannot be empty");
		return false;
	}
	else if(phone===""||!(phoneno.test(phone))){
		alert("Must enter valid phone number!");
		console.log("Hi Sachin");
		return false;
	}
	else if(validateEmail(email) == false){
		alert("Please enter a valid email address!");
		return false;
	}
	else if(message===""){
		alert("Drop a Message!!!");
		console.log("Hi Sachin");
		return false;
	}
	else{
		alert("Form has been submitted.");
}
}

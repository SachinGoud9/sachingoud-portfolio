var jsonObj = [	
{"id":"0", "src":"1.jpg", "name":"photo1", "info":"web", "update":"11/06/2021"},
{"id":"1", "src":"2.jpg", "name":"photo2", "info":"web", "update":"11/06/2021"},
{"id":"2", "src":"3.jpg", "name":"photo3", "info":"web", "update":"11/06/2021"},
{"id":"3", "src":"4.jpg", "name":"photo4", "info":"web", "update":"11/06/2021"},
{"id":"4", "src":"5.jpg", "name":"photo5", "info":"web", "update":"11/06/2021"},
{"id":"5", "src":"6.jpg", "name":"photo6", "info":"web", "update":"11/06/2021"},
];


var gallery = document.getElementById('galleryPics');
loadImages();



var btn = document.getElementById("add_button");

btn.addEventListener('click', function addNewImage(){
		var modal = document.getElementById('myModal');
		var span = document.getElementsByClassName("close")[0];

		modal.style.display = "block";
		span.onclick = function() {
	    	modal.style.display = "none";
		}
		window.onclick = function(event) {
		    if (event.target == modal) {
	        	modal.style.display = "none";
	    	}
		}
	}
);






var addbtn = document.getElementById('Addimage_button');
if(addbtn){
addbtn.addEventListener('click', function(){	
	var emptNameimg = document.forms["form2"]["nameimg"].value;
	var emptUrl = document.forms["form2"]["url"].value;
	var emptInfo = document.forms["form2"]["info"].value;
	var emptUpdate = document.forms["form2"]["update"].value;

	var parts = emptUpdate.split('/');
	var dateOfPic = new Date(parts[2],parts[1]-1,parts[0]);
	var now = new Date();
	var dateOfPicTimestamp = (new Date(dateOfPic)).getTime();
	var nowTimeStamp = now.getTime();
	var regExDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
	if(emptNameimg===""||emptUrl===""||emptInfo===""||emptUpdate===""||dateOfPicTimestamp>nowTimeStamp||!regExDate.test(emptUpdate))
	{
		alert("Invalid fields"); 
		return;
	}
	var newJsonObjString = "{\"id\":\""+jsonObj.length+"\",\"name\":\""+emptNameimg+"\",\"src\":\""+emptUrl+"\",\"info\":\""+emptInfo+"\",\"update\":\""+emptUpdate+"\"}"
	var newJsonObj = JSON.parse(newJsonObjString);
	jsonObj.splice(jsonObj.length,0,newJsonObj);
	gallery.innerHTML = "";
	loadImages();
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
	document.forms["form2"]["nameimg"].value = "";
	document.forms["form2"]["url"].value = "";
	document.forms["form2"]["info"].value = "";
	document.forms["form2"]["update"].value = "";
	return;
});
}




function loadImages(){
	for(var obj in jsonObj){
		var innerObj = jsonObj[obj];
		var img = document.createElement("img");
		img.src = innerObj.src;
		img.alt = innerObj.id;
		img.style.flex= "25%";
		img.style.width = "400px";		
		img.style.height = "400px";	
		img.addEventListener('click', function(e){
			console.log("clicked");
			var modal1 = document.getElementById('myModal1');
			var span1 = document.getElementsByClassName("close1")[0];

			var p=0;
			for(p=0; p<jsonObj.length; p++){
				if(jsonObj[p].id === e.target.alt){
					break;
				}
			}

			modal1.getElementsByTagName('input')[0].value = jsonObj[p].name;
			modal1.getElementsByTagName('input')[1].value = jsonObj[p].src;
			modal1.getElementsByTagName('input')[2].value = jsonObj[p].info;
			modal1.getElementsByTagName('input')[3].value = jsonObj[p].update;

			var dynamicUpdateButton = document.getElementById('Updateimage_button');
			var dynamicRemoveButton = document.getElementById('Removeimage_button');
			dynamicUpdateButton.value=e.target.alt;
			dynamicRemoveButton.value=e.target.alt;
			dynamicUpdateButton.addEventListener('click', function(evt){
				var emptNameimg1 = modal1.getElementsByTagName('input')[0].value;
				var emptUrl1 = modal1.getElementsByTagName('input')[1].value;
				var emptInfo1 = modal1.getElementsByTagName('input')[2].value;
				var emptUpdate1 = modal1.getElementsByTagName('input')[3].value;

				var parts1 = emptUpdate1.split('/');
				var dateOfPic1 = new Date(parts1[2],parts1[1]-1,parts1[0]);
				var now1 = new Date();
				var dateOfPicTimestamp1 = (new Date(dateOfPic1)).getTime();
				var nowTimeStamp1 = now1.getTime();

				var regExDate = /(?:0[1-9]|[12][0-9]|3[01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
				
				if(emptNameimg1===""||emptUrl1===""||emptInfo1===""||emptUpdate1===""||dateOfPicTimestamp1>nowTimeStamp1||!regExDate.test(emptUpdate1)){
					alert("Invalid fields");
				}else{
					var q=0;
					for(var q=0; q<jsonObj.length; q++){
						if(jsonObj[q].id === evt.target.value){
							break;
						}
					}
					console.log(evt.target.value);
					console.log(jsonObj[q]);
					jsonObj[q].name = modal1.getElementsByTagName('input')[0].value;
					jsonObj[q].src = modal1.getElementsByTagName('input')[1].value;
					jsonObj[q].info = modal1.getElementsByTagName('input')[2].value;
					jsonObj[q].update = modal1.getElementsByTagName('input')[3].value;
					gallery.innerHTML = "";
					loadImages();

				modal1.style.display = "none"; 
				
				}
			});
			
			
			dynamicRemoveButton.addEventListener('click', function(evnt){
				for(var y=0; y<jsonObj.length; y++){
					if(jsonObj[y].id === evnt.target.value){
						jsonObj.splice(y,1);
						break;
					}
				}
				modal1.style.display = "none"; 
				
				gallery.innerHTML = "";
				loadImages();
			});

			modal1.style.display = "block";
			span1.onclick = function() {
				modal1.style.display = "none";				
				
			}
			window.onclick = function(event) {
				if (event.target == modal1) {
					modal1.style.display = "none";
					
				} event.stopPropagation();
			}
		});

		
		
		
		gallery.appendChild(img);
	}
}

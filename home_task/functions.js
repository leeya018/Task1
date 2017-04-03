var tasksList =  [
	["Register to Full Stack Web Course", "Normal"],		
	["Attend Selection Day", "Critical"],
	["Go see X-Men apocalypse movie", "If You Can"]];


function populateTasks() {
	var ul_el = $("#list")[0];
	for (var i = 0; i < tasksList.length; i++) {
		var element = document.createElement('li');
		var text = document.createTextNode(tasksList[i][0] + " " + tasksList[i][1]);
		element.appendChild(text);
		ul_el.append(element);
	}
}


function addItem(){
	var text = $("#inputText").val();	
	// $("#selectOpdoction").attr("value","Holden");
	var select =$("#selectOption").val(); 

	if(text.length >= 6){

		addToList(text,select);
	}
	else{
		alert("need more then 5");
	}

}


function addToList(text,select){

	var liElem = $('<tr></tr>');
	liElem.text(text+"                 "+select);
	switch(select){
		case "Normal":
		liElem.css("color","green");
		break;
		case "Critical":
		liElem.css("color","orange");
		break;
		case "If You Can":
		liElem.css("color","#3987c9");
		break;
		case "Urgent":
		liElem.css("color","red");
		break;


		
	}
	$("#list").append(liElem);
}




$(document).keydown(function(e) {
	if(	e.keyCode == 13){
		addItem();


	}
});

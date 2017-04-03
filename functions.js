var count = 3;

var tasksList =  [
	["Register to Full Stack Web Course", "Normal", false, "row_0"],		
	["Attend Selection Day", "Critical", false, "row_1"],
	["Go see X-Men apocalypse movie", "If You Can", false, "row_2"]];

function populateTasks() {
	sortList();
	for (var i = 0; i< tasksList.length; i++) {
		addToList(tasksList[i]);
	}
}

function addItem() {
	var taskInput = $("#inputText").val();	
	var priorityInput = $("#selectOption").val(); 

	if (taskInput.length >= 6) {
		$("#validation").empty();
		tasksList.push([taskInput, priorityInput, false, "row_" + count]);
		count++;
		$("#list").empty();
		populateTasks();
	} else {
		$("#validation").text("* More than 5 characters required!");
	}
}

function addToList(task){

	var taskInput = task[0];
	var priorityInput = task[1];
	var isDone = task[2];
	var taskId = task[3];

	var row = $("<tr id='"+ taskId + "' onClick='markAsDone(this)'></tr>");
	var task = document.createElement('td');
	var priority = document.createElement('td');

	task.width = "300er";
	task.innerHTML = taskInput;
	priority.innerHTML = priorityInput;

	row.append(task);
	row.append(priority);

	switch (priorityInput) {
		case "Normal":
		row.css("color","green");
		break;
		case "Critical":
		row.css("color","orange");
		break;
		case "If You Can":
		row.css("color","#3987c9");
		break;
		case "Urgent":
		row.css("color","red");
		break;
	}

	if (isDone) {
		markAsDone(row[0]);
	}

	$("#list").append(row);
}

function sortList() {
	tasksList.sort(function(a, b) { 
		var priorityLev1 = getPriorityLevel(a[1]);
		var priorityLev2 = getPriorityLevel(b[1]);

		if (priorityLev1 === priorityLev2) {
			return a[0].toLowerCase() > b[0].toLowerCase();
		} else {
			return priorityLev1 - priorityLev2;
		}
	});
}

function markAsDone(elem) {
	var markedTask = tasksList.filter(function(el) { return el[3] === elem.id; })[0];
	markedTask[2] = true;
	elem.style.textDecoration = "line-through";
	elem.style.color = "gray";
}

$(document).keydown(function(e) {
	if (e.keyCode == 13) {
		addItem();
	}
});

function getPriorityLevel(val) {
	switch (val) {
		case "Urgent":
		return 1;
		break;
		case "Critical":
		return 2;
		break;
		case "Normal":
		return 3;
		break;
		case "If You Can":
		return 4;
		break;
	}
	return 0;
}
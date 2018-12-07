
//MAIN.JS - For JavaScript Functions that are not directly related to positions, people, or the graph.
//main.js is loaded after the rest of the document. 

//

var currentID;
var occupantID;

function setCurrentID(i){
    currentID = i;
}

function getCurrentID(){
    return currentID;
}

function setOccupantID(i){
	occupantID = i;
}

function getOccupantID(){
	return occupantID;	
}


function clearDetailsTab(){
	$('#details-title').empty();
	$('#pos-id').empty();
	$('#pos-heldby').empty();
	$('#pos-attributes').empty();
	$('#person-attributes').empty();	
	$('#first-name').empty();
	$('#last-name').empty();
	$('#email').empty();
	$('#phone').empty();
	document.getElementById('ppl-save-btn').style="display: none;" //hide  button
	document.getElementById('ppl-save-btn').style="display: none;" //hide  button
	document.getElementById('save-btn').style="display: none;" //hide  button
	document.getElementById('delete-btn').style ="display: none;"
	document.getElementById('ppl-delete-btn').style ="display: none;"

	$( "#details-title" ).attr(
        "style", "border: rgb(124,252,0); background: #fff9f2");

		
    $( "#pos-attributes p, #pos-id p" ).attr(
        "style", "border: rgb(124,252,0); background: #fff9f2");

    $('#namespan').attr(
		"style", "border: rgb(124,252,0); background: #fff9f2");
		
	$('#ppl-fname').attr(
		"style", "border: rgb(124,252,0); background: #fff9f2");
		
	$('#ppl-lname').attr(
		"style", "border: rgb(124,252,0); background: #fff9f2");
		
	$( "#person-attributes p, #pos-id p" ).attr(
		"style", "border: rgb(124,252,0); background: #fff9f2");
		
	console.log('cleared tab');
}
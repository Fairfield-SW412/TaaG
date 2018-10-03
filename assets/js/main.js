
$('#edit-btn').click(function(){
   $('#main-modal').modal('show');
}); 


$('#edit-btn').click(function(){
	//hide/show edit/save buttons
	document.getElementById('edit-btn').style="display: none;"
	document.getElementById('save-btn').style="display: block;"
	//make editable and focus on the first editable line
	$('#pos-ocname, #pos-weightdata, #Value1, #Value2, #Value3').attr('contenteditable','true');
	$('#pos-ocname').focus();
	//change color to make noticable
	
	document.getElementById('pos-ocname').setAttribute(
   	"style", "border: solid black; background: none");  //pick any color

   	document.getElementById('pos-weightdata').setAttribute(
   	"style", "border: solid black; background: none");

   	document.getElementById('Value1').setAttribute(
   	"style", "border: solid black; background: none");

   	document.getElementById('Value2').setAttribute(
   	"style", "border: solid black; background: none");

   	document.getElementById('Value3').setAttribute(
   	"style", "border: solid black; background: none");

});

$('#save-btn').click(function(){
	
	//write new data to the JSON file here

	//get variables
	var id = document.getElementById('pos-id').innerHTML;
	var namevalue = document.getElementById('pos-ocname').innerHTML;
	var posweightdata = document.getElementById('pos-weightdata').innerHTML;
	var value1 = document.getElementById('Value1').innerHTML;
	var value2 = document.getElementById('Value2').innerHTML;
	var value3 = document.getElementById('Value3').innerHTML;
	//alert('The id is: '+id);  //testing

	
	//update json here
		//find by id, replace the whole line


	//make UN-editable 
	$('#pos-ocname, #pos-weightdata, #Value1, #Value2, #Value3').attr('contenteditable','false');

	//hide/show save button
	document.getElementById('save-btn').style="display: none;"
	document.getElementById('edit-btn').style="display: block;"

	//change color

	document.getElementById('pos-ocname').setAttribute(
   	"style", "border: none; background: rgb(124,252,0)");

   	document.getElementById('pos-weightdata').setAttribute(
   	"style", "border: none; background: rgb(124,252,0)");

   	document.getElementById('Value1').setAttribute(
   	"style", "border: none; background: rgb(124,252,0)");

   	document.getElementById('Value2').setAttribute(
   	"style", "border: none; background: rgb(124,252,0)");

   	document.getElementById('Value3').setAttribute(
   	"style", "border: none; background: rgb(124,252,0)");
	

	//refresh page   --necessary???
	//location.reload();
	
});
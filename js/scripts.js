$(document).ready(function () {
	$("#design-picture").click(function () {
		$("#design-page1").show();
		$("#design-picture").hide();
	});
	$("#design-page1").click(function () {
		$("#design-page1").hide();
		$("#design-picture").show();
	});
	$("#development-picture").click(function () {
		$("#development-page2").show();
		$("#development-picture").hide();
	});
	$("#development-page2").click(function () {
		$("#development-page2").hide();
		$("#development-picture").show();
	});
	$("#production-picture").click(function () {
		$("#production-page3").show();
		$("#production-picture").hide();
	});
	$("#production-page3").click(function () {
		$("#production-page3").hide();
		$("#production-picture").show();
	});
});

$(document).ready(function () {
	$("#hover1").hover(function () {
		$("#imgtext1").toggle();
	});
	$("#hover2").hover(function () {
		$("#imgtext2").toggle();
	});
	$("#hover3").hover(function () {
		$("#imgtext3").toggle();
	});
	$("#hover4").hover(function () {
		$("#imgtext4").toggle();
	});
	$("#hover5").hover(function () {
		$("#imgtext5").toggle();
	});
	$("#hover6").hover(function () {
		$("#imgtext6").toggle();
	});
	$("#hover7").hover(function () {
		$("#imgtext7").toggle();
	});
	$("#hover8").hover(function () {
		$("#imgtext8").toggle();
	});
});
function contact(form){
	var name = document.forms["form2"]["name"].value;
		var email = document.forms["form2"]["email"].value;
		var message = document.forms["form2"]["message"].value;
		alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
		  };
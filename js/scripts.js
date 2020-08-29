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

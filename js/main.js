$(document).ready(function(){
	nav_id = nav_id || "";

	if (nav_id !== "nav-home" && nav_id !== "") {
		$('nav li.active').removeClass('active');
		$('#' + nav_id).addClass('active');
	}
});
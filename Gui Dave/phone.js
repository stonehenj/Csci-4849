$(document).ready(function() {
	$("#content_dialer").show();
	$("#content_add").hide();
	$("#content_list").hide();
});


$("#tabDialer").click(function() {
	$("#content_dialer").show();
	$("#content_add").hide();
	$("#content_list").hide();
});


$("#tabAdd").click(function() {
    $("#content_add").show();
    $("#content_dialer").hide();
    $("#content_list").hide();
});


$("#tabList").click(function() {
    $("#content_list").show();
    $("#content_add").hide();
    $("#content_dialer").hide();
});

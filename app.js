var userloggedin = false;

$(document).ready(function() {
	if (!userloggedin) {
		$("#right").append("<a href=\"#\">Log In</a>");
	} else {
		$("#right").append("<a href=\"#\">Profile</a>");
		$("#right").append("<a href=\"#\">Log Out</a>");
	}
});

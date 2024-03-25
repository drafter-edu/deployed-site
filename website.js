/**
In a deployed site, this file will be replaced. However,
to support locally developed sites, we have a default implementation using ajax.
**/
$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "website.py",
		success: function(contents) {
			startWebserver(contents);
		}
	});
});
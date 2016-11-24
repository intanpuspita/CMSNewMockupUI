$(document).ready(function(){

	$('#filer_input').filer({
		showThumbs: true,
		addMore: true,
		allowDuplicates: false,
		appendTo: "#tbl-file > tbody > tr > td"
	});

	$('.jFiler-input').css("display", "none");
});

$(document).ready(function(){

	$('#filer_input').filer({
		showThumbs: true,
		addMore: true,
		allowDuplicates: false,
		appendTo: "#tbl-file > tbody > tr > td#jfiler-append"
	});

	$('.jFiler-input').css("display", "none");
});

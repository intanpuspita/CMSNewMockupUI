var $table = $('#table');
var mydata = 
[
    {
        "comp_item": "Computing Foundations",
        "last_result": "Working",
        "self_review": "Working",
        "champ_review": "...",
        "spv_review": "..."
    },
    {
        "comp_item": "Software Construction",
        "last_result": "Working",
        "self_review": "Working",
        "champ_review": "...",
        "spv_review": "..."
    },
    {
        "comp_item": "Software Design",
        "last_result": "Working",
        "self_review": "Working",
        "champ_review": "...",
        "spv_review": "..."
    }
];

$(function () {
    var placeholder = "&#xf002 Jump to a competency, project, staff or search";
    $(".select2").select2({
      placeholder: placeholder,
      allowClear: true,
      escapeMarkup: function(m) { 
         return m; 
      }
    });
    
    $('#table').bootstrapTable({
        data: mydata
    });
    console.log(mydata);
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
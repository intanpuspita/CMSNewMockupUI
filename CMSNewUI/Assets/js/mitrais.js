var $table = $('#table');
var mydata = 
[
    {
        "CompItem": "Computing Foundations",
        "LastResult": "Working",
        "SelfReview": "Working",
        "ChampReview": "...",
        "SpvReview": "..."
    },
    {
        "CompItem": "Software Construction",
        "LastResult": "Working",
        "SelfReview": "Working",
        "ChampReview": "...",
        "SpvReview": "..."
    },
    {
        "CompItem": "Software Design",
        "LastResult": "Working",
        "SelfReview": "Working",
        "ChampReview": "...",
        "SpvReview": "..."
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

function linkFormatter(value, row, index) {
    //return "<a href='/userid/id:" + row.id + "'>" + value + "</a>";
    return "<a href='SelfReviewDetail'>" + value + "</a>";
}
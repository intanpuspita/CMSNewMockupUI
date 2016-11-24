/** soon will be deleted, because we will using web api
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
]; **/

$(function () {
    var placeholder = "&#xf002 Jump to a competency, project, staff or search";
    $(".select2").select2({
      placeholder: placeholder,
      allowClear: true,
      escapeMarkup: function(m) { 
         return m; 
      }
    });
    
    /** soon will be deleted, because we will using web api
    $('#table').bootstrapTable({
        data: mydata
    });
    console.log(mydata);**/
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* link formatter function*/
function linkFormatter(value, row, index) {
    //return "<a href='/userid/id:" + row.id + "'>" + value + "</a>";
    return "<a href='SelfReviewDetail'>" + value + "</a>";
}

/* query param function */
function queryParams() {
    return {
        type: 'owner',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
        page: 1
    };
}
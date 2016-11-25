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

    $("#cmb-attachtype").change(function () {
        $("#form-attachment").find("div[id^='attinput-']").css("display", "none");

        $("#" + $(this).val()).css("display", "");
    });

    $("#btn-submit").click(function () {
        var html = "";
        var appendTo = "#tbl-file > tbody > tr > td";

        html = html + "<tr class='jFiler-item' style='height:28px'><td style='width:100px'>Url</td><td style='width:159px'>" + $("#url").val() + "</td><td style='width:100px'><a class='icon-jfi-trash' onclick='javascript:deleteUrl(this)'></a></td></tr>";
        
        $(html).appendTo(appendTo);
    });
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

/* delete attachment URL */
function deleteUrl(e)
{
    $(e).closest("tr").remove();
}
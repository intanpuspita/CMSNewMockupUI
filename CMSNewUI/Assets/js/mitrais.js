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

    $("#cmb-attachtype").change(function () {
        $("#form-attachment").find("div[id^='attinput-']").css("display", "none");

        $("#" + $(this).val()).css("display", "");
    });

    $("#lnk-delurl").click(function () {
        alert("yuhuuu");
        $(this).parentsUntil("tr").remove();
    });

    $("#btn-submit").click(function () {
        var html = "";
        var appendTo = "#tbl-file > tbody > tr > td";

        html = html + "<tr class='jFiler-item' style='height:28px'><td style='width:100px'>Url</td><td style='width:159px'>" + $("#url").val() + "</td><td style='width:100px'><a class=' lnk-delurl' id='lnk-delurl'>delete</a></td></tr>";
        
        $(html).appendTo(appendTo);
    });
});
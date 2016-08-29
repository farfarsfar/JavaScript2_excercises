var scbApi = "http://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0401/BE0401A/BefolkprognRev2016";
var JSONquery = 
    { "query": [
        {"code": "ContentsCode",
         "selection": {
            "filter": "item",
            "values": ["000000TP"]
            }
        }
    ],
    "response": {
        "format": "json"
    }
}

$( document ).ready(function() {
    $.ajax({
        url: scbApi,
        type: "POST",
        data: JSON.stringify(JSONquery),
        datatype: "json"
    }).done(function(obj) {
        var rubriker = obj.columns;
        var data = obj.data;
        $("<thead/>", {
            id: "resultHead"
        }).appendTo("#target")
        
        $.each(rubriker, function(index, value){
           $("<th/>", {
                id: "kolumn" + index,
                html: value.text
                }
            ).appendTo("#resultHead");
        });
        $.each(data, function(index, value){
            var currentRow = $("<tr/>")
            $("<td/>", { html: value.key[0] }).appendTo(currentRow)
            $("<td/>", { html: new Intl.NumberFormat('sv-SE').format(value.values[0]) 
                       }).appendTo(currentRow)
            currentRow.appendTo("#target")
        });
    });
});



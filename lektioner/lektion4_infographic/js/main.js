var apiBase = "http://swapi.co/api/";
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

function getPeople(url) {
    var total = '';
    var topWeight = 0;
    $("#target").hide().fadeOut();
    getInner(apiBase + url);
    function getInner(url){
        $.get(url, function(data){
            console.log(data)
            $.each(data.results, function(index, person){
                topWeight = person.mass > topWeight ? person.mass : topWeight;
                // clear comma from weight
                person.mass = person.mass.replace(/\,/g,'');
                //calculate BMI
                var bmi = Math.round((person.mass / Math.pow(person.height / 100, 2) * 10)) / 10;
                console.log(person.height)
                var div = $("<div/>");
                var meter = $("<meter/>",
                            { html: person.name,
                              value: person.mass
                                       });
                var label = $("<p/>", {html: person.name 
                                          + ". Weight: " + person.mass 
                                          + ". Height: " + person.height 
                                          + ". BMI: " + bmi});
                div.append(meter, label);
                 
                if (person.mass !== 'unknown') { $("#target").append(div) };
            });
            
            if (data.next) {
                getInner(data.next)    
            };
            
            
        });
    }    
}

getPeople("people")


$(document).ajaxStop(function() {
    $("#target").show();
})
/*
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
*/


"use strict";

var apiBase = "http://swapi.co/api/";

var getPeople = function getPeople(url) {
    var currentTopWeight = 0;
    $("#target").hide().fadeOut();
    getInner(apiBase + url);
    function getInner(url) {
        $.get(url, function (data) {
            $.each(data.results, function (index, person) {

                // clear comma from person's weight
                person.mass = Number(person.mass.replace(/\,/g, ''));
                //set top weight
                currentTopWeight = getTopWeight(person.mass, currentTopWeight);

                //calculate BMI
                var bmi = Math.round(person.mass / Math.pow(person.height / 100, 2) * 10) / 10;

                var div = $("<div/>", { class: "container" });
                var meter = $("<div/>", { class: "meter",
                    style: "height: " + person.mass + "px"
                });
                var label = $("<p/>", { html: person.name
                    /*+ ". Weight: " + person.mass 
                    + ". Height: " + person.height 
                    + ". BMI: " + bmi*/ });
                meter.append(label);
                div.append(meter);
                if (!isNaN(person.mass)) {
                    $("#target").append(div);
                };
            });

            if (data.next) {
                getInner(data.next);
            }
        }).done(function () {
            console.log(this);
        });
        //$("#target .meter").attr("max", currentTopWeight)
    }
};

var getTopWeight = function getTopWeight(personMass, currentTop) {
    var topWeight = personMass > currentTop ? personMass : currentTop;
    return topWeight;
};

getPeople("people/");

$(document).ajaxStop(function () {

    $("#target").show();

    /*$("div").each(function() {
        var $this = $(this),
        child = $this.children(":first");
        $this.css("minHeight", function() {
            return child[0].getBoundingClientRect().height;
    });*/
});

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

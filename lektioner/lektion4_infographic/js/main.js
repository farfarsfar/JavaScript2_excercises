var apiBase = "http://swapi.co/api/";
var $ = require('jquery');

require('../css/main.css');

const getPeople = url => {
    var currentTopWeight = 0;
    $("#target").hide().fadeOut();
    getInner(apiBase + url);
    function getInner(url) {
        $.get(url, function(data){
           $.each(data.results, function(index, person){

                // clear from person's weight
                person.mass = Number(person.mass.replace(/\,/g,''));
                //set top weight
                currentTopWeight = getTopWeight(person.mass, currentTopWeight)

                //calculate BMI
                var bmi = Math.round((person.mass / Math.pow(person.height / 100, 2) * 10)) / 10;
                
                var div = $("<div/>", { class: "container"});
                var meter = $("<div/>",
                            { class: "meter",
                              style: "height: " + (person.mass*4) + "px"
                                       });
                var label = $("<p/>", { html: person.name 
                                          /*+ ". Weight: " + person.mass 
                                          + ". Height: " + person.height 
                                          + ". BMI: " + bmi*/});
                meter.append(label)
                div.append(meter);
                if (!isNaN(person.mass)) { $("#target").append(div) };
            });
            
            if (data.next) {
                getInner(data.next)    
            }
           
        }).done(function () { console.log(this); });
        //$("#target .meter").attr("max", currentTopWeight)
    }  
    
      
}

const getTopWeight = (personMass, currentTop) => {
    var topWeight = personMass > currentTop ? personMass : currentTop;
    return topWeight;
}

getPeople("people/")


$(document).ajaxStop(function() {
    
    $("#target").show();

    /*$("div").each(function() {
        var $this = $(this),
        child = $this.children(":first");
        $this.css("minHeight", function() {
            return child[0].getBoundingClientRect().height;
    });*/

})




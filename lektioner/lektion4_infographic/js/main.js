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

                // clear comma from person's weight
                person.mass = Number(person.mass.replace(/\,/g,''));
                //set top weight
                currentTopWeight = getTopWeight(person.mass, currentTopWeight)

                //calculate BMI
                var bmi = Math.round((person.mass / Math.pow(person.height / 100, 2) * 10)) / 10;
                
                var meterContainer = $("<div/>", {
                                        "class": "container",
                                        hover: function(){
                                          console.log("hovered")
                                          var detailedMeter = $(this).children(".meter").clone().addClass("detailedMeter");
                                          var detailedLabel = $(this).children(".label").clone().toggleClass("label detailedLabel").show();
                                          detailedMeter.append(detailedLabel)
                                          $("#detailedDisplay").empty().append(detailedMeter)
                                        }
                                      });
                var meter = $("<div/>", { 
                                "class": "meter",
                                style: "height: " + (person.mass*4) + "px",
                                });
                var labelContainer = $("<div/", { class : "container"})
                var label = $("<p/>", { 
                                "class": "label",
                                html: person.name 
                                + ". Weight: " + person.mass 
                                + ". Height: " + person.height 
                                + ". BMI: " + bmi
                                }).hide();
                                      
                meterContainer.append(meter, label);
                if (!isNaN(person.mass)) {
                  $("#target").append(meterContainer);
                };
            });
            
            /*if (data.next) {
                getInner(data.next)    
            }*/
           
        }).done(function () { console.log(this); });
        //$("#target .meter").attr("max", currentTopWeight)
    }  
    
      
}

const getTopWeight = (personMass, currentTop) => {
    var topWeight = personMass > currentTop ? personMass : currentTop;
    return topWeight;
}

$("header").click(function() {
  getPeople("people/")
})


function reCalcHorizontal() {
  $('#detailedDisplay').css({
      'top': $(window).height()/2,
      'left': $(window).width()/2,
      'height': $(window).width()/1.5
    });
    console.log($('#detailedDisplay').attr('style'));
}

$(window).on('resize', function(e) {
    reCalcHorizontal();
});



$(document).ajaxStop(function() {
    
    reCalcHorizontal();
    $("#target").show();

    /*$("div").each(function() {
        var $this = $(this),
        child = $this.children(":first");
        $this.css("minHeight", function() {
            return child[0].getBoundingClientRect().height;
    });*/

})




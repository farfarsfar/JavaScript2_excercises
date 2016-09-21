var apiBase = "http://swapi.co/api/";
var $ = require('jquery');

require('../css/main.css');

const getPeople = url => {
    var currentTopWeight = 0;
    $("#target").hide()
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
              var meterContainer = $("<div/>", { "class": "container" })
                                    .data('heightValue', person.mass * 4);
              var meter = $("<dd/>", { 
                              "class": "meter"})
                              .attr('data-heightValue', person.mass * 4);
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
            
            if (data.next) {
                getInner(data.next)    
            }
           

        }).done(function () { 
          $('#target').fadeIn();
          console.log(this); 
        });
    }      
}

const getTopWeight = (personMass, currentTop) => {
    var topWeight = personMass > currentTop ? personMass : currentTop;
    return topWeight;
}

function reCalcHorizontal() {
  $('#detailedDisplay').css({
      'width': $(window).width()
    });
    console.log($('#detailedDisplay').attr('style'));
}

function sortByWeight() {
  var sorted = $('.container').sort(function (a, b) {
    return $(a).data('heightValue') - $(b).data('heightValue');
    });
    $("#target").empty()
    sorted.appendTo("#target");
}


function displayGraph(bars, i) {
  var listLength = bars.length;
  var goalHeight = $(bars[i]).attr('data-heightValue');
  if (i < listLength) {
    $(bars[i]).animate({
      height: goalHeight
    }, 800);
    var barTimer = setTimeout(function() {
      i++;
      displayGraph(bars, i);
    }, 100);
   }
}
$(document).ready(function() {
  getPeople('people/');
  
  $('#target').on('mouseover', '.container', function() {
      var meterToClone = $(this).children(".meter");
      var labelToClone = $(this).children(".label");
      var futureWidth = meterToClone.css("height");
      var detailedMeter = meterToClone.clone()
                          .addClass("detailedMeter")
                          .css({ 'height': '40px', 'width': 0 });
      var detailedLabel = labelToClone.clone()
                          .toggleClass("label detailedLabel").show();
      
      $("#detailedDisplay").empty();
      detailedMeter.append(detailedLabel)
      .appendTo("#detailedDisplay")
      .animate({ width: futureWidth}, 1000)
  });
  
});


$(window).on('resize', function(e) {
    //reCalcHorizontal();
});

$(document).ajaxStop(function() {
    
    sortByWeight();
    //animateBars();
    displayGraph($(".meter"), 0)
    //reCalcHorizontal();
})


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
                                    .data('heightValue', person.mass );
              var meter = $("<dd/>", { 
                              "class": "meter"})
                              .attr('data-heightValue', person.mass * 3);
              var labelContainer = $("<div/", { class : "container"})
              var label = $("<p/>", { 
                              "class": "label",
                              html: `<span class='labelName'>${person.name}</span> weighs in at 
                              <span class='labelWeight'>${person.mass} kilos</span>. With a height of 
                              <span class='labelHeight'>${person.height} cm</span>, this computes to a BMI of 
                              <span class='labelBMI'>${bmi}</span>. 
                              This is within the <span>${calculateBMICategory(bmi)}</span> part of the spectrum. 
                              ${(bmi > 100) ? `In fact, it is off the scale completely. Makes you wonder
                              if there should be some kind of inter-species standard. I mean, <em>he can't even fit 
                              inside the bar diagram!</em>`: ``}`
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
        });
    }      
}

const getTopWeight = (personMass, currentTop) => {
    var topWeight = personMass > currentTop ? personMass : currentTop;
    return topWeight;
}

const calculateBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return "underweight"
  } else if ( bmi >= 18.5 && bmi < 25 ) {
    return "normal weight"
  } else if ( bmi >= 25 && bmi < 30 ) {
    return "overweight"
  } else if ( bmi >= 30 && bmi < 35 ) {
    return "class I obesity"
  } else if (bmi >= 35 && bmi < 40 ) {
    return "class II obesity"
  } else if ( bmi >= 40 && bmi < 50 ) {
    return "class III obesity"
  } else if ( bmi >= 50 && bmi < 60 ) {
    return "class IV obesity"
  } else if ( bmi > 60 ) {
    return "class V obesity"
  } 
}

const prepareDetailedMeter = () => {
  $('#target').on('mouseover', '.container', function() {
      var meterToClone = $(this).children(".meter");
      var labelToClone = $(this).children(".label");
      var futureWidth = meterToClone.attr("data-heightValue") * 1.5;
      var detailedMeter = meterToClone.clone()
                          .addClass("detailedMeter")
                          .removeClass('meter')
                          .css({ 'height': '100%', 'width': 0 });
      var detailedLabel = labelToClone.clone()
                          .toggleClass("label detailedLabel").hide();
      
      $("#detailedDisplay").empty();
      detailedLabel.appendTo("#detailedDisplay")
      detailedMeter
      .prependTo("#detailedDisplay")
      .delay(100)
      .animate({ width: futureWidth }, 400, function() {
        $('.detailedLabel').fadeIn('fast');
      });
      $(this).addClass('zoomed')
  }).on('mouseleave', '.container', function() {
    $(this).removeClass('zoomed');
  });
}

function sortByWeight() {
  var sorted = $('.container').sort(function (a, b) {
    return $(a).data('heightValue') - $(b).data('heightValue');
    });
    $("#target").empty()
    .append(sorted)
}

function displayGraph(bars, i, callback) {
  var listLength = bars.length;
  var goalHeight = $(bars[i]).attr('data-heightValue');
  if (i < listLength) {
    $(bars[i]).animate({
      height: goalHeight
    }, 100);
    setTimeout(function() {
      i++;
      displayGraph(bars, i, prepareDetailedMeter);
    }, 20);
    } else { 
     callback() 
  }
}

$(document).ready(function() {
  getPeople('people/');
});

$(document).ajaxStop(function() {
    sortByWeight();
    displayGraph($(".meter"), 0, prepareDetailedMeter)
})


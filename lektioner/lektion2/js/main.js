
//Ni kommer ändå bara googla de här länkarna, lika bra att lägga in dem.
$('button').each(function(){
  var lastClass = $(this).attr('class').split(' ').pop();
  $(this).nextAll('div').append("<a href='http://api.jquery.com/" + lastClass + "'>" + lastClass + "</a>");
});

//Här nedanför är det lugnt att skriva kod


$(".addclass").on("click", function(){ 
    $(this).nextAll('div').children('p').addClass("addedClass");
})
    
$(".removeclass").on("click", function(){ 
    $(this).nextAll('div').children('p').removeClass("addedClass");
})

$(".toggleclass").on("click", function(){ 
    $(this).nextAll('div').children('p').toggleClass("addedClass");
})

/////

var originalCss = $('.sizecard').css;

$(".height").on("click", function(){ 
    $(this).nextAll('div').css('height', '300px');
})

$(".width").on("click", function(){ 
    $(this).nextAll('div').css('width', '200px');
})

$(".height-width-reset").on("click", function(){ 
    $(this).nextAll('div').removeAttr('style');
})

///

$(".append").on("click", function(){ 
    $(this).nextAll('div').append("<p>Appended text</p>");
})

$(".html").on("click", function(){
    $(this).nextAll('div').children("p:first").html("<p>I just changed this HTML, sorry </p>");
})

$(".prepend").on("click", function(){ 
    $(this).nextAll('div').prepend("<p>Prepended text</p>");
})

$(".text").on("click", function(){ 
    $(this).nextAll('div').children("p:last").text("Just an added text node")
})

///////

$(".after").on("click", function(){ 
    $(this).nextAll('div').after("<p>This is added after</p>");
})

$(".before").on("click", function(){ 
    $(this).nextAll('div').before("<p>This is added before</p>");
})

////

$(".empty").on("click", function(){ 
    $(this).nextAll('div').empty();
})


$(".remove").on("click", function(){ 
    $(this).nextAll('div').remove();
})

/////

$(".hide").on("click", function(){ 
    $(this).nextAll('div').hide();
})


$(".show").on("click", function(){ 
    $(this).nextAll('div').show();
})

$(".toggle").on("click", function(){ 
    $(this).nextAll('div').toggle("dsgfsdfgsd");
})
///////
$(".fadeIn").on("click", function(){ 
    $(this).nextAll('div').css('opacity', 1).fadeIn();
})

$(".fadeOut").on("click", function(){ 
    $(this).nextAll('div').fadeOut();
})

$(".fadeTo").on("click", function(){ 
    $(this).nextAll('div').fadeTo(600, 0.5);
})

$(".fadeToggle").on("click", function(){ 
    $(this).nextAll('div').fadeToggle();
})

///

$(".slideToggle").on("click", function(){ 
    $(this).nextAll('div').slideToggle(400);
})

$(".slideUp").on("click", function(){ 
    $(this).nextAll('div').slideUp(400);
})

$(".slideDown").on("click", function(){ 
    $(this).nextAll('div').slideDown(400);
})

/////

$(".slideToggleSide").click( function() {
    $(this).nextAll('div').toggleClass("isLeft");
    var isLeft = $(this).nextAll('div').hasClass("isLeft")
    $(this).nextAll('div').animate({ left: isLeft ? '-3000': "0"}, 600);
})
    
$(".slideinright").click( function() {
    $(this).nextAll('div').animate({ left: '0'}, 600);
})

$(".slideinleft").click( function() {
    $(this).nextAll('div').animate({ left: '0'}, 600);
})
  
//////
$(".click").on("click", function() {
    $(this).parents().css({"border" : '1px dashed'}).animate()
})

$(".dblclick").on("dblclick", function() {
    $(this).parents().css({"border" : '3px solid'})
})

$(".hover").hover(
    function() { 
        $(this).css({"fontSize":"36px"})
    },
    function() {
        $(this).removeAttr("style")
    }
);

$(".mousedown").on("mousedown", function() {
    $(this).next('button').css({"background-color" : 'teal'})
})

$(".mouseup").on("mouseup", function() {
    $(this).removeAttr('style')
})

$(".mouseenter").on("mouseup", function() {
    $(this).removeAttr('style')
})
/*
.mouseenter(function() {
            $(this).parents().css({"background" : 'green'})
          }).mouseleave(function() {
            $(this).parents().css({"background" : '#EEE'})
            */
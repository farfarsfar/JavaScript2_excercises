//Import (ES2015), inte viktigt just nu
import $ from 'jquery';

//Sätter vår url till en variabel så vi slipper skriva den hela tiden
var baseUrl = 'https://bakverksapi.herokuapp.com/bakverk';

//Laddar in vår main.html med .load(), specifiera var du ska ladda in html och vilken html du ska ladda in.
$('.wrapper').load('main.html');


//Kapslar in ajax-kallet i en funktion så vi kan välja när det ska anropas
function getData(){
	//anger vad vi ska hämta och vad vi ska göra med den datan
	$.get(baseUrl, function(data){
		//Kallar på min funktion som sköter själva DOM-manipulationen
		//Man kan såklart sköta manipul. här men det kan vara bra att lägga det i en separat funktion
		addData(data);
	})
}

//Funktionen för att lägga till data i DOMen
function addData(data){

	//Tom var för att lägga all vår html i
	var bakeList = '';
	//data är den datan vi får från ajax-anropet. bakverk är varje enskilt objekt
	//Loopar genom varje objekt, tar ut namn och betyg för varje och skapar en htmlsträng
	data.forEach(function(bakverk){
		bakeList += "<li><ul><li><h3>" + bakverk.namn + "</h3></li><li>Betyg:" + bakverk.betyg + "</li></ul></li>";
	})
	//Appendar hela htmlsträngen efter loopen är klar
	$('.bakeList').append(bakeList);
}

//Istället för 'click' har vi nu 'submit' = när vi klickar på input field submit
$(document.body).on('submit', '#formInput' ,function(e){
	//Förhindrar att den vanliga funktionen körs, vi vill göra annat i vår kod
	e.preventDefault();
	//Tar den data som finns i vår form
	var jsonData = $('#formInput').serialize();
	//.ajax() gör samma sak som .get() men med fler inställningar
	$.ajax({
		//Specifiera vilken typ
		type: 'POST',
		//Specifiera vilken url, hämtar från vår variabel
		url: baseUrl, 
		//Skickar med vår tidigare serilizerade data
		data: jsonData,
		//Om vår POST lyckas så lägger vi till all info i .bakeList
		success: function(response){
			//Appendar allting
			$('.bakeList').append("<li><ul><li><h3>" + response.namn + "</h3></li><li>Betyg:" + response.betyg + "</li></ul></li>`)";		
		}});
});

//Binder våra klick till document.body så de inte ska unbindas när vi laddar ny html med .load()
$(document.body).on('click', '.kittenLink', function(e){
	$('.wrapper').load('load.html');
	e.preventDefault();
})

$(document.body).on('click', '.mainLink', function(e){
	$('.wrapper').load('main.html');
	getData();
	e.preventDefault();
})


/*function getAjaxData(){
	//De mest basala parametrarna till .ajax()
	$.ajax({
		//method = om vi ska hämta data eller skicka data
		method: 'GET',
		//Använder vår tidigare angivna url
		url: baseUrl,
		//Det är även bra att ha med callbacks beroende på om anropet lyckas eller vi får error
		success: function(data){
			addData(data);
		}
	});
}*/
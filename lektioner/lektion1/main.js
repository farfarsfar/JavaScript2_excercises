function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

changeBackground("#FFBB22");

function changeText(element, inner, newText) {
    var toChange = document.getElementsByClassName(element);
    toChange[0].querySelectorAll(inner)[0].innerHTML = newText;
}


function changeElement(element) {
    var toChange = document.getElementsByClassName(element)[0];
    if (!toChange.style.width) {
        toChange.style.width = "600px";
        toChange.style.height = "200px";
        toChange.style.backgroundColor = "#115456";
    } else {
        toChange.style.width = "";
        toChange.style.height = "";
        toChange.style.backgroundColor = "";
    }
}
function getImageSrc(image) {
   var imageSrc = document.querySelectorAll(image)[0].src;
   console.log("This is the image source for the image: ", imageSrc)
}

getImageSrc("img");

function changeImgSrc(image) {
    var toChange = document.querySelectorAll(image)[0];

    function checkImage(imageSrc, load, noLoad) {
        var img = new Image;
        img.onload = load;
        img.onerror = noLoad;
        img.src = imageSrc;
    }
    var whichImage = toChange.src.indexOf("ddmcdn") == -1 ? 0 : 1;
    var imgSources = [ 
                       "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg",
                       "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
                     ]
    
    checkImage(imgSources[whichImage], function() { toChange.src = imgSources[whichImage]; console.log("Image loaded") }, function() { console.log("Image could not be loaded!")})
}

function randomNumber() {
    var random = Math.floor(Math.random() * 100 + 1);
    console.log("random number: ", random);
    return random
}

function changeColorRandomly() {
    
    function randomToRgb() {  
        return Math.floor(randomNumber() * 2.56);
    }
    var randomToColor = 'rgba(' + randomToRgb() + "," + randomToRgb() + ',' + randomToRgb() + ',' + Math.round(Math.random() * 10 ) / 10 + ')';
    console.log(randomToColor)
    changeBackground(randomToColor);
}

function changeAll() {
    changeElement("changeme"); 
    changeText("changeme", "p", "HEJSAN SVEJSAN");
    changeImgSrc("img");
    randomNumber();
    changeColorRandomly();
}

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() { changeAll() }, false);



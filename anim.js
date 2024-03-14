var r;
var g;
var b;
var compteur = 0;

function changeColor() {
    //creation of variables
    let elements = document.getElementsByClassName("color");
    let inputColor = document.getElementById("choixCouleur");
    let color = inputColor.value;
    let tagH2 = document.getElementsByTagName("h2");
    let tagH1 = document.getElementsByTagName("h1");
    let tagLabel = document.getElementsByTagName("label");
    let h2b = document.getElementById("border");
    let code = color.substr(1);

    hexToRgb(code);

    //Tester to know if the color is too dark
    if (r + g + b < 260) {
        for (let h2 of tagH2) {
            h2.style.color = "white";
        }

        for (let h1 of tagH1) {
            h1.style.color = "white";
        }

        h2b.style.borderBottom = "2px solid white";
        for (let label of tagLabel) {
            label.style.color = "white";
        }
    }
    //Tester to know if the color is to light
    else if (r + g + b > 260) {
        for (let h2 of tagH2) {
            h2.style.color = "black";
        }

        for (let h1 of tagH1) {
            h1.style.color = "black";
        }

        h2b.style.borderBottom = "2px solid black";

        for (let label of tagLabel) {
            label.style.color = "black";
        }
    }
    //Change the color
    for (let element of elements) {
        element.style.background = color;

    }

}
//Fonction servant à changer le hex sorti de la valeur de l'input color en RGB
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;

    return r + "," + g + "," + b;
}


$('#moi').on("click", function () {
    now = $('#lightbox').css('display');
    src = $(this).attr('src');
    if (now == 'flex') {
        $('#lightbox').css('display', 'none');
    }

    else {
        $('#lightbox').css('display', 'flex');
        $('#big').attr('src', src);
    }
})

$(document).on("keyup", function (evenement) {
    if (evenement.keyCode == 27) {
        $('#lightbox').css('display', 'none');
    }
})


const settings = {
    async: true,
    crossDomain: true,
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    method: 'GET',
    headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});


function Game() {
    compteur++;

    if (compteur % 2 == 0) {
        console.log("jeu terminé");
        $("main").css("background-color", "#ffffff");
        $("li").css("color", "#000000");
        $("h3").css("color", "#000000");
        $(".color").css({ "border": "1px solid black" });
        $("#gauche").css({ "border-right": "1px solid black" });
        $("body").css("background-color", "#ffffff");
        $("p").css("color", '#000000');
        $("svg").each(function () {
            $(this).attr('fill', "#000000");
        });
        $("#space").css("opacity", "0");
    }
    else {
        console.log("jeu lancé");

        $("main").css("background-color", "#181b1e");
        $("li").css("color", "#ffffff");
        $("h3").css("color", "#ffffff");
        $("p").css("color", '#ffffff');
        $(".color").css({ "border": "1px solid white" });
        $("#gauche").css({ "border-right": "1px solid white" });
        $("body").css("background-color", "#181b1e");

        $("svg").each(function () {
            $(this).attr('fill', "#ffffff");
        });

        document.onmousemove = function(e){
        xMousePos = e.clientX + window.pageXOffset;
        yMousePos = e.clientY + window.pageYOffset;

        $('#space').css("opacity", "1");
        $("#space").css("top", yMousePos);
        $("#space").css("left", xMousePos);
        };
         

    }
}
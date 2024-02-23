var r;
var g;
var b;

function changeColor(){
    //creation of variables
    let elements = document.getElementsByClassName("color");
    let inputColor = document.getElementById("choixCouleur") ;
    let color = inputColor.value;
    let tagH2 = document.getElementsByTagName("h2");
    let tagH1 = document.getElementsByTagName("h1");
    let tagLabel = document.getElementsByTagName("label");
    let h2b = document.getElementById("border");
    let code = color.substr(1);

    hexToRgb(code);

    //Tester to know if the color is too dark
    if (r+g+b < 250){
        for (let h2 of tagH2){
            h2.style.color="white";
        }

        for (let h1 of tagH1){
            h1.style.color ="white";
        }

        h2b.style.borderBottom = "2px solid white";
        for(let label of tagLabel){
            label.style.color ="white";
            }
    }
    //Tester to know if the color is to light
    else if (r+g+b > 250){
        for (let h2 of tagH2){
            h2.style.color="black";
        }

        for (let h1 of tagH1){
            h1.style.color ="black";
        }

        h2b.style.borderBottom = "2px solid black";

        for(let label of tagLabel){
        label.style.color ="black";
        }
    }
    //Change the color
    for(let element of elements){
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
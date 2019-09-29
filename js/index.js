document.addEventListener('DOMContentLoaded', function () {

  var black2 = document.getElementById('black2');
  var purple2 = document.getElementById('purple2');
  var red2 = document.getElementById('red2');
  var black = document.getElementById('black');
  var red = document.getElementById('red');
  var green = document.getElementById('green');
  var yellow = document.getElementById('yellow');
  var purple = document.getElementById('purple');
  var white = document.getElementById('white');
  var blue = document.getElementById('blue');
  var khaki = document.getElementById('khaki');
  var darkmagenta = document.getElementById('darkmagenta');


  red.addEventListener("click", changeColorLabelRed);
  black2.addEventListener("click", changeColorLabelBlackLight);
  purple2.addEventListener("click", changeColorLabelPurpleLight);
  red2.addEventListener("click", changeColorLabelRedLight);
  black.addEventListener("click", changeColorLabelBlack);
  green.addEventListener("click", changeColorLabelGreen);
  yellow.addEventListener("click", changeColorLabelYellow);
  purple.addEventListener("click", changeColorLabelPurple);
  white.addEventListener("click", changeColorLabelWhite);
  blue.addEventListener("click", changeColorLabelBlue);
  brown.addEventListener("click", changeColorLabelBrown);
  pink.addEventListener("click", changeColorLabelPink);
  aqua.addEventListener("click", changeColorLabelAqua);
  khaki.addEventListener("click", changeColorLabelKhaki);
  darkmagenta.addEventListener("click", changeColorLabelDarkmagenta);

  function changeColorLabelBrown(){
    var label = document.getElementById('label');
    label.innerHTML='brown';
    var label2 = document.getElementById('label2');
    label2.innerHTML='brown';

    $('#numberIconColor').addClass("brown");
  
  }

  function changeColorLabelPink(){
    var label = document.getElementById('label');
    label.innerHTML='pink';
    var label2 = document.getElementById('label2');
    label2.innerHTML='pink';
    $('#numberIconColor').addClass("pink");

  
  }

  function changeColorLabelAqua(){
    var label = document.getElementById('label');
    label.innerHTML='aqua';
    var label2 = document.getElementById('label2');
    label2.innerHTML='aqua';
    $('#numberIconColor').addClass("aqua");
    
  }


  function changeColorLabelKhaki(){
    var label = document.getElementById('label');
    label.innerHTML='khaki';
    var label2 = document.getElementById('label2');
    label2.innerHTML='khaki';
    $('#numberIconColor').addClass("khaki");

  
  }
 
function changeColorLabelDarkmagenta(){
  var label = document.getElementById('label');
  label.innerHTML='darkmagenta';
  var label2 = document.getElementById('label2');
  label2.innerHTML='darkmagenta';
  $('#numberIconColor').addClass("darkmagenta");

}


function changeColorLabelRed(){
  var label = document.getElementById('label');
  label.innerHTML='red';
  var label2 = document.getElementById('label2');
  label2.innerHTML='red';
  $('#numberIconColor').addClass("red");


}

function changeColorLabelRedLight(){
  var label = document.getElementById('label');
  label.innerHTML='red light';
  var label2 = document.getElementById('label2');
  label2.innerHTML='red light';
    $('#numberIconColor').addClass("text-red");


}

function changeColorLabelPurple(){
  var label = document.getElementById('label');
  label.innerHTML='purple';
  var label2 = document.getElementById('label2');
  label2.innerHTML='purple';
  $('#numberIconColor').addClass("purple");

}


function changeColorLabelPurpleLight(){
  var label = document.getElementById('label');
  label.innerHTML='purple light';
  var label2 = document.getElementById('label2');
  label2.innerHTML='purple light';
  $('#numberIconColor').addClass("text-secondary");

}
function changeColorLabelWhite(){
  var label = document.getElementById('label');
  label.innerHTML='white';
  var label2 = document.getElementById('label2');
  label2.innerHTML='white';
  $('#numberIconColor').addClass("white");

}

function changeColorLabelGreen(){
  var label = document.getElementById('label');
  label.innerHTML='green';
  var label2 = document.getElementById('label2');
  label2.innerHTML='green';
  $('#numberIconColor').addClass("green");

}

function changeColorLabelBlue(){
  var label = document.getElementById('label');
  label.innerHTML='blue';
  var label2 = document.getElementById('label2');
  label2.innerHTML='blue';
  $('#numberIconColor').addClass("blue");

}

function changeColorLabelYellow(){
  var label = document.getElementById('label');
  label.innerHTML='yellow';
  var label2 = document.getElementById('label2');
  label2.innerHTML='yellow';
  $('#numberIconColor').addClass("yellow");

}

function changeColorLabelBluelight(){
  var label = document.getElementById('label');
  label.innerHTML='blue light';
  var label2 = document.getElementById('label2');
  label2.innerHTML='blue light';
  $('#numberIconColor').addClass("text-dark");

}

function changeColorLabelBlack(){
  var label = document.getElementById('label');
  label.innerHTML='black';
  var label2 = document.getElementById('label2');
  label2.innerHTML='black';
}

function changeColorLabelBlackLight(){
  var label = document.getElementById('label');
  label.innerHTML='black light';
  var label2 = document.getElementById('label2');
  label2.innerHTML='black light';
  $('#numberIconColor').addClass("black");

}

var numberDialog = document.getElementById("numberDialog").innerText;

document.querySelector("#minus").addEventListener('click', decNumber);
document.querySelector("#plus").addEventListener('click', incNumber);

var i = numberDialog;

function incNumber() {
        i++;
    document.getElementById("numberDialog").innerHTML = i;
}

function decNumber() {
    if (i > 0) {
        --i;
    }
    document.getElementById("numberDialog").innerHTML = i;
}

document.querySelector("#agreeClicked").addEventListener('click', function(){

  document.querySelector("#numberDisplayed").innerHTML = document.querySelector("#numberDialog").innerText;
  document.querySelector("#buttonClick").innerHTML = "Checkout now";

for (let i = 0; i < document.querySelector("#numberDialog").innerText; i++) {
  $('#numberIconColor').each(function(i) {
    $(this).append('<i class="fas fa-circle fa-2x pr-3 pb-3" ></i>');
});
$('#numberIconColor').addClass();
$('#numberIconColor').show();
  
}

  $('#zaioModalCenter').modal('hide');

});


$('#buttonClick').on('click', function () {
  $('#zaioModalCenter').modal();
});

});



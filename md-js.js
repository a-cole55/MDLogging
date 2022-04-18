// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}



// Services Section
document.querySelector('#link').addEventListener('click', display1)
document.querySelector('#link2').addEventListener('click', display2)
document.querySelector('#link3').addEventListener('click', display3)

function display1(){
  if(document.querySelector('#sec1').style.display == 'none'){
    document.querySelector('#sec1').style.display = 'block'
  } else{
  document.querySelector('#sec1').style.display = 'none'
}
}
function display2(){
    if(document.querySelector('#sec2').style.display == 'none'){
      document.querySelector('#sec2').style.display = 'block'
    } else {
      document.querySelector('#sec2').style.display = 'none'
    }
}
function display3(){
    if(document.querySelector('#sec3').style.display == 'none'){
      document.querySelector('#sec3').style.display = 'block'
    } else{
      document.querySelector('#sec3').style.display = 'none'
    }
}
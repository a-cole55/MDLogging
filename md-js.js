
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

let scrollpos = window.scrollY; // window scroll position
console.log(scrollpos)
let wh = window.innerHeight+250; // as soon as element touches bottom with offset event starts
console.log(wh)
let element = document.querySelector("#about"); //element
console.log(element.offsetTop)
console.log(element.offsetTop - wh)

window.addEventListener('scroll', function(){ 
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});

// Services Section
document.querySelector('#link').addEventListener('mouseover', display1)
document.querySelector('#link2').addEventListener('mouseover', display2)
document.querySelector('#link3').addEventListener('mouseover', display3)

function display1(){
  let sec1 = document.querySelector('#sec1')
  sec1.classList.add("fade");
  sec1.style.display = 'block';
}
function display2(){
    document.querySelector('#sec2').style.display = 'block';
    document.querySelector('#sec2').classList.add("fade");
}
function display3(){
  document.querySelector('#sec3').style.display = 'block';
  document.querySelector('#sec3').classList.add("fade");
}
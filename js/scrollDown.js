//dynamicly obtain the position of a container

// if(id1){ const id1 = document.getElementById(id1)}

const opacity_off = 0;
const opacity_on = 100;

const COLOR1 = "#FFEEC3";
const COLOR2 = "#7A89AA";
const COLOR3 = "#FFEEC3";

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  // element1 = document.getElementById("element1");
  element1 = document.getElementById("element2");
  element2 = document.getElementById("element3");

  // let position1 = element1.getBoundingClientRect().top;
  let position1 = element1.getBoundingClientRect().bottom;
  let position2 = element2.getBoundingClientRect().bottom*2;

  // if (window.innerWidth < 768) {
  //   position1 = 1000; // Change this to your desired position
  //   position2 = 1700; // Change this to your desired position
  //   position3 = 2400;
  // } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
  //   position1 = 1000; // Change this to your desired position
  //   position2 = 1700; // Change this to your desired position
  //   position3 = 2400;
  // } else {
  //   position1 = 1000; // Change this to your desired position
  //   position2 = 1700; // Change this to your desired position
  //   position3 = 2400;
  // }

  if (scrollPosition < position1) {
    //show bkg1
    document.querySelector(".individual__bkg1").style.backgroundColor = COLOR1;
    //show svg1
    document.querySelector(".svg1").style.opacity = opacity_on;
    document.querySelector(".svg2").style.opacity = opacity_off;
    //hide bkg2
    document.querySelector(".individual__bkg2").style.backgroundColor = "white";
  } else if (scrollPosition < position2) {
    //hide svg1
    document.querySelector(".svg1").style.opacity = opacity_off;
    //hide bkg1
    document.querySelector(".individual__bkg1").style.backgroundColor = "white";
    //show bkg2
    document.querySelector(".individual__bkg2").style.backgroundColor = COLOR2;
    //show svg2
    document.querySelector(".svg2").style.opacity = opacity_on;
  } else{
    document.querySelector(".svg2").style.opacity = opacity_off;
    //hide bkg2
    document.querySelector(".individual__bkg2").style.backgroundColor = "white";
    document.querySelector(".individual__bkg3").style.backgroundColor = COLOR3;
    document.querySelector(".svg3").style.opacity = opacity_on;
  } 
});

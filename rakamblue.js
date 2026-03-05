// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});


// Change header color on scroll

window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#021027";

}else{

header.style.background = "#061836";

}

});
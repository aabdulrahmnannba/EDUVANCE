/* ==========================
   EDUVANCE PREMIUM v2.0
========================== */

/* LOADER */

window.addEventListener("load", () => {

const loader =
document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 500);

}, 1000);

});

/* DARK / LIGHT MODE */

const themeBtn =
document.getElementById("theme-toggle");

if(themeBtn){

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "dark"){

document.body.classList.add("dark");

themeBtn.innerHTML =
'<i class="fas fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML =
'<i class="fas fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML =
'<i class="fas fa-moon"></i>';

}

});

}

/* BACK TO TOP */

const backToTop =
document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

backToTop.style.display = "block";

}else{

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

/* NAVBAR EFFECT */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 100){

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.1)";

}else{

navbar.style.boxShadow = "none";

}

});

/* COUNTER ANIMATION */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target =
counter.innerText.replace("+","")
.replace("%","");

const value =
+counter.getAttribute("data-count") || target;

const current =
+counter.innerText.replace("+","")
.replace("%","") || 0;

const increment =
value / 100;

if(current < value){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(updateCounter,20);

}else{

if(counter.textContent.includes("%")){

counter.innerText = value + "%";

}else{

counter.innerText = value + "+";

}

}

};

updateCounter();

});

/* SCROLL ANIMATION */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.1
});

document.querySelectorAll(
".feature-card,.stat-card,.achievement-card,.testimonial-card"
).forEach(el=>{

observer.observe(el);

});

/* MOBILE MENU */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/* SMOOTH LINKS */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});
var carousel = document.querySelector('.view');
var colorPicker = document.getElementById("color-picker");
var currentSlide = "1";
var preBtn = document.getElementById("pre-btn");
var nextBtn = document.getElementById("next-btn");

function rgb2Hex(rgb){
    let values = rgb.match(/\d+\s*,\s*\d+\s*,\s*\d+/g)[0].split(",")
console.log(values);
let hexValues = values.map((x)=>{
    return parseInt(x).toString(16)
});
return "#"+hexValues.join("");
}

function nextSlide() {
//   carousel.style.transition = "transform 200ms ease-in";
carousel.style.transform = 'translateX(-100%)';

carousel.appendChild(carousel.firstElementChild);
carousel.style.transform = 'translateX(0)';

currentSlide = String(parseInt(currentSlide) +1);
if (parseInt( currentSlide) >3){
    currentSlide = "1";
}
let rgb = document.getElementById(currentSlide).style.backgroundColor;
 colorPicker.value = rgb2Hex(rgb)

}

function preSlide() {
//   carousel.style.transition = "transform 200ms ease-in";
carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
carousel.style.transform = 'translateX(100%)';
// carousel.appendChild(carousel.firstElementChild);

carousel.style.transform = 'translateX(0)';

currentSlide = String(parseInt(currentSlide) -1);
if (parseInt( currentSlide) <1){
    currentSlide = "3";
}
let rgb = document.getElementById(currentSlide).style.backgroundColor;
 colorPicker.value = rgb2Hex(rgb);

}

colorPicker.addEventListener("change",()=>{
let _currentSlide =  document.getElementById(currentSlide);
_currentSlide.style.backgroundColor = colorPicker.value;
});

preBtn.addEventListener("click",()=>{preSlide()});
nextBtn.addEventListener("click",()=>{nextSlide()});

let screens = document.querySelectorAll(".view-screen");
screens.forEach((x)=>{
    // console.log(x);
    x.style.backgroundColor = "#ffffff";
})

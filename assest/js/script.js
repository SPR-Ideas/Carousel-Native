var carousel = document.querySelector('.view');
var colorPicker = document.getElementById("color-picker");
var currentSlide = "1";
var preBtn = document.getElementById("pre-btn");
var nextBtn = document.getElementById("next-btn");



function nextSlide() {
//   carousel.style.transition = "transform 200ms ease-in";
carousel.style.transform = 'translateX(-100%)';

carousel.appendChild(carousel.firstElementChild);
carousel.style.transform = 'translateX(0)';

currentSlide = String(parseInt(currentSlide) +1);
if (parseInt( currentSlide) >3){
    currentSlide = "1";
}

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

}

colorPicker.addEventListener("change",()=>{
let _currentSlide =  document.getElementById(currentSlide);
_currentSlide.style.backgroundColor = colorPicker.value;
});

preBtn.addEventListener("click",()=>{preSlide()});
nextBtn.addEventListener("click",()=>{nextSlide()});



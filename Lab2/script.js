const leftArrow = document.querySelector(".previous");
const rightArrow = document.querySelector(".next");
const slider = document.querySelector(".slider");
const images = [...document.querySelectorAll(".slide")];

let currentImage = 0;
let paused = false;

leftArrow.addEventListener("click", () => moveLeft());
rightArrow.addEventListener("click", () => moveRight());

slider.addEventListener("mouseenter", () => (paused = true))
slider.addEventListener("mouseleave", () => (paused = false))

function moveRight(){
    currentImage++;
    if(currentImage>images.length -1)
    {
        currentImage = 0;
    }
    for(let i = 0; i< images.length; i++)
    {
        images[i].style.transform=`translateX(${currentImage*-100}%)`
    }
}
function moveLeft(){
    currentImage--;
    if(currentImage < 0)
    {
        currentImage = images.length-1;
    }
    for(let i = 0; i< images.length; i++)
    {
        images[i].style.transform=`translateX(${currentImage*-100}%)`;
    }
}
setInterval(() => !paused && moveRight(), 500);
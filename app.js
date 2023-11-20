let slides = document.querySelectorAll('.slide');
let nextbtn = document.querySelector('.next');
let prevbtn = document.querySelector('.prev');
let dotWrapper = document.querySelector('.dotted-wrapper');
let dot = dotWrapper.querySelectorAll('.dot');

let createdElems = [];


slides.forEach((slide,i)=>{
    slide.style.transform = `translateX(${i*100})`
})

let current = 0;

function moveFoward() {
    current+=1
    if(current === slides.length) {
        current = 0;
    }
    slides.forEach((slide)=>{
        slide.style.transform = `translate(-${current*100}%)`
    })
}

function moveBackwards() {
    current-=1
    if(current === 0) {
        current = 0;
    }
    slides.forEach((slide)=>{
        slide.style.transform = `translate(-${current*100}%)`
    })
}


function mapArray(params) {
    slides.forEach(createDot);
}
mapArray();

function createDot() {
    let element = document.createElement('div');
    element.setAttribute('class', 'dot');
    dotWrapper.appendChild(element);
    createdElems.push(element);
}

function watch() {
    moveFoward();

    createdElems.forEach((elems, i)=>{
        if(current === i) {
            elems.style.backgroundColor = 'white';
        } else {
            elems.style.backgroundColor = 'rgb(0, 0, 0, 0.513)'
        }
    })
}

function watchPrev() {
    moveBackwards()

    createdElems.forEach((elems, i)=>{
        if(current === i) {
            elems.style.backgroundColor = 'white'
        } else {
            elems.style.backgroundColor = 'rgb(0, 0, 0, 0.513)'
        }
    })
}

createdElems[0].style.backgroundColor = 'white';


setInterval(watch, 3000);
nextbtn.addEventListener('click', watch);
prevbtn.addEventListener('click', watchPrev);
let draw = document.getElementById("draw"),
    slider = document.getElementById("sliderBox").querySelector('input'),
    colorPick = document.getElementById("colorBox").querySelector('input'),
    colorbtn = document.getElementById("colorBox").querySelector('button'),
    square = document.querySelector('div'),
    btn = document.getElementById("clearBox").querySelector('button');

//sets default sketchpad
for (let i = 0; i < 400; i++) {   
    let grids = document.createElement("div");
    grids.classList.add("grids");
    draw.appendChild(grids);
}

//slider and pixel listener
slider.addEventListener('input', editCanvas);
colorPick.addEventListener('input', clearRand)
colorbtn.addEventListener('click', randomColor);
square.addEventListener('mouseover', sketch);
btn.addEventListener('click', clear);


//function to set pixel size of sketchpad
function editCanvas() {
    //clears sketchpad
    let childNodes = document.getElementById("draw").getElementsByClassName("grids");
    for(let i = childNodes.length-1; i >= 0; i--){
        let childNode = childNodes[i];
        childNode.parentNode.removeChild(childNode);
    }

    //sets new sketchpad based on slider value
    let num = slider.value;
    let numsq = Math.pow(slider.value, 2);
    draw.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    draw.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < numsq; i++) {
        let grids = document.createElement("div");
        grids.classList.add("grids");
        draw.appendChild(grids);
    }
    console.log(numsq)
}

//changes the color of the pixels
function sketch(e) {
    color = colorPick.value;
    let randA = Math.floor((Math.random() * 255) + 1);
    let randB = Math.floor((Math.random() * 255) + 1);
    let randC = Math.floor((Math.random() * 255) + 1);
    if (e.target.classList.contains("random")) {
        e.target.style.backgroundColor = `rgb(${randA}, ${randB}, ${randC})`;
    } else if (e.target.classList.contains("grids")) {
        e.target.style.backgroundColor = "white";
        e.target.style.backgroundColor = `${color}`;
    }  
}

//clears sketchpad
function clear() {
    let childNodes = document.getElementById("draw").getElementsByClassName("grids");
    for(let i = childNodes.length-1; i >= 0; i--){
        let childNode = childNodes[i];
        childNode.style.backgroundColor = "black";
    }
}

//adds class random for random color
function randomColor() {
    let childNodes = document.getElementById("draw").getElementsByClassName("grids");
    for(let i = childNodes.length-1; i >= 0; i--){
        let childNode = childNodes[i];
        childNode.classList.add("random");
    }
}

// clear random class for random color
function clearRand() {
    let childNodes = document.getElementById("draw").getElementsByClassName("grids");
    for(let i = childNodes.length-1; i >= 0; i--){
        let childNode = childNodes[i];
        childNode.classList.remove("random");
    } 
}

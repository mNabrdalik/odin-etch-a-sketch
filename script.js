
const container = document.querySelector(".container");
const setSizeBtn = document.querySelector("#setSizeBtn");
//default Size;
let size = 16;

// change square size
function resizeSquare(squareId, size) {
    document.getElementById(squareId).style.width = `calc(65vh/${size})`;
    document.getElementById(squareId).style.height = `calc(65vh/${size})`;
}

// generate pad/grid/area
function generateGrid(size) {
    container.innerHTML = "";

    let size2 = size * size;
    for (let i = 1; i <= size2; i++) {
        let squareId = 's' + i;
        container.innerHTML += `<div class = "square" id ="${squareId}"></div>`;
        resizeSquare(squareId, size);
    }

    setHover(size2);
}

// prompt button to set a grid size
setSizeBtn.onclick = function() {
    let setSize = prompt("Please enter grid Size (max 100)", 16);

    if (setSize <= 100){
        generateGrid(setSize);
    } else {
        alert("This number is greater than 100");
    }

};

//change square color on hover and don't change it
function setHover(size2) {
    for (let i = 1; i <= size2; i++) {
        let squareId = 's' + i;
        document.getElementById(squareId).addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.backgroundColor = "var(--dark-green)";
        });
    }
}

generateGrid(size);
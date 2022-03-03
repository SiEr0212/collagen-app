const starContainer = document.getElementById("star-container");

//Math.seedrandom("CDR");
let stars = ["✦", "✧", "★", "✬", "✯", "✴", "✵", "✶", "✷", "✹", "✸"];

for (let i = 0; i < 200; i++) {
    const element = document.createElement("div");
    element.style.top = `${Math.random() * 100}%`;
    element.style.left = `${Math.random() * 100}%`;
    let sizeX = Math.random() * 7 + 1;
    let sizeY = ~~(Math.random() * 3) + 1;
    //element.style.width = `${sizeX}px`;
    //element.style.height = `${sizeX}px`;
    element.innerHTML = stars[~~(Math.random() * stars.length)];
    element.style.fontSize = sizeX + "px";
    element.style.animation = `${
        7000 / sizeX + Math.random() * (7000 / sizeX)
    }ms linear ${Math.random() * 5000}ms alternate infinite twinkle`;
    starContainer.appendChild(element);
    element.setAttribute("class", "star");
}

const star = document.querySelector("#shootingstar");

function shoot() {
    star.style.left = ~~(Math.random() * window.innerWidth) + "px";

    star.classList.toggle("shoot");
    setTimeout(function () {
        shoot();
    }, ~~(Math.random() * 10000) + 5000);
}
setTimeout(shoot, ~~(Math.random() * 10000) + 3000);

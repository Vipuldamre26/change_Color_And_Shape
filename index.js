let circle = document.querySelector(".circle");
let colorBtn = document.querySelector(".colorbtn");
let shapeBtn = document.querySelector(".shapebtn");
let sqre = document.querySelector("#sqre");

let colorArr = ["red", "pink", "blue", "yellow", "orange", "green", "violet", "cyan", "lightgreen"];
let shapeArr = ["triangle", "circle-shape", "rectangle", "diamond", "square"];


colorBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * colorArr.length);
    circle.style.backgroundColor = colorArr[randomIndex];
});

shapeBtn.addEventListener("click", () => {
    let ranIndex = Math.floor(Math.random() * shapeArr.length);
    console.log(ranIndex);
    sqre.setAttribute("class", shapeArr[ranIndex]);
    console.log(shapeArr[ranIndex]);
});
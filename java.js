var grid = document.getElementsByClassName("grid")[0];
var letter = document.getElementsByClassName("letter")[0].innerText;

function Letter() {
    grid.style.gridTemplateColumns = "1fr";
    grid.style.gridTemplateRows = "1fr";
    var t = letter.innerText
    alert(t);
}


console.log(letter)
console.log(grid)

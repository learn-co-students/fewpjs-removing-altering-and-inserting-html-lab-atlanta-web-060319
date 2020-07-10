
document.querySelector("main#main").remove();

let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = "<h1>Cat is the champion</h1>";
newHeader.className = "victory";
document.body.appendChild(newHeader)

// const newHeader = document.createElement("h1");
// newHeader.id = "victory"
// newHeader.innerHTML = "Cat is the champion";
// newHeader.className = "victory";
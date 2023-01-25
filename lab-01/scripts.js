console.log(myButton);

// Used if the id given to something is invalid for JavaScript, e.g. my-Button would be invalid because of the '-'
//const myButton = document.getElementById('myButton');

console.log("Hello!");

let count = 0

function changeButtonText() {
    count ++;
    myButton.textContent = `I've been clicked ${count} times!`;
    myButton.classList.add('clicked');
}

myButton.addEventListener('click', changeButtonText);


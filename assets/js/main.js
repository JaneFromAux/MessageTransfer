

let input = document.getElementById('input');
let output = document.getElementById('output');
let defaulty = document.getElementById('default');



function textTransfer() {
    console.log(" ATextal fia Batzis");
    let content = input.value;
    if (content) {
        output.innerHTML = content;
        defaulty.innerHTML = "";
    } else {
        defaulty.innerHTML = "Gib bitte eine Nachricht ein!";
    }
}
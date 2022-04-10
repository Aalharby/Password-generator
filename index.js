
let text1El = document.getElementById("text1")
let text2El = document.getElementById("text2")
let text3El = document.getElementById("text3")
let text4El = document.getElementById("text4")
let lengthEl = document.getElementById("length")


let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" 
, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", ">", "<", "?", "/", "'", '"', ';'];

function generate(){
    text1El.value = passwordGen()
    text2El.value = passwordGen()
    text3El.value = passwordGen()
    text4El.value = passwordGen()
}

function passwordGen(){
    let pass = ""
    for(let i =0; i < lengthEl.value; i++){
        pass += characters[Math.floor(Math.random() * characters.length)]
        
    }
    return pass
}

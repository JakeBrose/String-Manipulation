let testString = "Please work";;
let reverseArray = [];
function reversal() {
    reverseArray = testString.split();
    reversed = reverseArray.reverse();
    console.log('reversed',reversed);
}
let alphaArray = [];
function alphabits() {
    alphaArray = testString.split();
    alphaOrder = alphaArray.sort();
    console.log('alphaOrder',alphaOrder);
}

function palindrome() {
    
}

let submit = document.getElementById('submit').addEventListener("click", reversal, alphabits, palindrome);
reversal();
alphabits();
palindrome();
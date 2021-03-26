let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let number = [Math.floor(Math.random() *100)]
btn.addEventListener("click", function(){
    let input = document.getElementById('userInput').value;
    if (input == number ){
        output.innerHTML = `Lo adivinaste bien, tu número era ${number}`
    } else if (input < number){
        output.innerHTML = "El numero que adivinaste es demaciado bajo"
    };
    if (input > number){
        output.innerHTML =  "El numero que adivinaste es demaciado alto"
    }
})

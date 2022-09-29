const body = document.querySelector('body');
//Definir lista de colores 
const bg_color = ['#FF9494','#A7FFE4','#AAC4FF','#FFF5E4','#FFD6EC','#B1B2FF'];

function ChangeColor(){
    // Random Number between 0-6
    let indexRandom = Math.floor(Math.random()*((6+1)-0)+0);
    console.log(indexRandom);
    //Cambiar color con el index random
    body.style.backgroundColor = bg_color [indexRandom];
}
const text_colors = ['white', 'black', 'blue','red'];
function ChangeTextColor(){
    const text = document.getElementById('text');
    const color_index = parseInt(Math.random() * text_colors.length);
    text.style.color = text_colors [color_index];
}
/*Al seleccionar un color */
const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    body.style.backgroundColor =  inputColor.value;
});

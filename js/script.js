const body = document.querySelector('body');
//Definir lista de colores 
const bg_color = ['red','green','blue','yellow','pink','purple'];

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

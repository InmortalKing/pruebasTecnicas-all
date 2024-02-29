//HACER UN ARRAY QUE CONTENGA 1000 NUMEROS ALEATORIOS

const numLista = [];

//Generador de 1000 num random
for(let i = 0; i<1000; i++){
    //Genera num sin decimales
    const num = Math.floor(Math.random()*1000);
    //Ternario para evitar números repetidos
    numLista.indexOf(num) === -1 ? numLista.push(num) : "";
}



console.log( Math.max(...numLista));


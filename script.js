// variable

let numero = document.getElementById("numero");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");

const sumar = () =>  {

    return numero.value++;
}


const restar = () => {

    if(numero.value > 0 ){

        return numero.value--; 
    }


}



// activar contador automatico:
// setinterval(sumar, 500);
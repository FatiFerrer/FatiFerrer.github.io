// primer elercicio, muestra en consola cual es el mayor de determinados numeros 

let numero = 1;
let numero1 = 2;
let numero2 = 3;
let mayor;


addEventListener('click', () => {
if(numero > numero1){
    mayor = numero1
}else(numero1 > numero2);{
    mayor = numero2
}
alert("El mayor numero es el " + mayor)
})

// segundo ejercicio, muestra un mensaje llagado determinado tiempo

setTimeout(function() {
    alert('Hola, han transcurrido 5 segundos desde que ingresaste a esta pagina');
  }, 5000);
  

// contador, cuenta del 0 al 10 

for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  //ejercio de arrays,

let nombresRandom = ["FATIMA", "ARACELI", "SANDRA", "NOENI", "IHARA", "ARAMI",
 "ANNA", "ERIKA", "MARCELA", "MONICA", "MARIA", "ANDRA", "DAMARIS", "JENNIFER", "LUZ"];
 for (let item of nombresRandom){
   // console.log(item)
  }
 for (let i= 3 ; i < nombresRandom.length; i++) {
    console.log(nombresRandom [i]);
    
    
}
 



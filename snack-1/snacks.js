// Snack 1 Crea una funzione che somma due numeri.

//   Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma
function Somma(Num1,Num2){
    return Num1 + Num2
}
console.log(Somma(2,5))


//   Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const somma = function(Num1,Num2) {
    return Num1 + Num2
}
console.log(somma(2,3))



//   Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const somma1 = (num1,num2) => {
    return num1 + num2
}

console.log(somma1(2,2))
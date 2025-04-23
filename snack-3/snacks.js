// Snack 3 Crea una funzione eseguiOperazione

//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). 
// La funzione deve eseguire l'operazione fornita sui due numeri.


// Funzione Somma
function Somma (num1,num2){
    return num1 + num2
}

// Funzione Moltiplica
function Moltiplica (num1,num2){
    return num1 * num2
}

// FUNZIONE DOVE PASSIAMO LA CALLBACK CHE SARA O SOMMA O MOLTIPLICA
function eseguiOperazione(num1,num2,callback){
    return callback (num1,num2)
}


// CONSOLE.LOG DI OGNUNO
console.log(eseguiOperazione(2,2,Somma))
console.log(eseguiOperazione(2,7,Moltiplica))
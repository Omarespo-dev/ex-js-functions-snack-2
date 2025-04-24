// Snack 9 (Bonus) Creare una funzione che esegue una sequenza di operazioni con ritardi

//   Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// const array =[
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
// ]

function sequenzaOperazioni(arr,tempo){
    let i =[0]

    const intervallo = setInterval(() => {
        if(i < arr.length){
            arr[i]()
            i++
        }else{
            clearInterval(intervallo)
        }

    }, tempo);
}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);

//     Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

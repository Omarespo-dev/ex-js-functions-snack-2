// Snack 6 Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(time){
    return function(){
        let count = 0
        
        setInterval(() => {
            console.log(count++)
        }, time);
    }
}
creaContatoreAutomatico(1000)()
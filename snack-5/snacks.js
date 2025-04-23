// Snack 5 Crea una funzione stampaOgniSecondo con setInterval.

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.


function stampaOgniSecondo(mess){
    return setInterval(() => console.log(mess),1000)
}

// Avvia l'intervallo con il messaggio "ciao"
const stampa = stampaOgniSecondo("ciao")


// Interrompi dopo 5 secondi (quindi vedremo 5 stampe)
setTimeout(() => {
    clearInterval(stampa);
    console.log("Intervallo interrotto");
}, 5000);

// Snack 4 Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms){
    return function(){

        setTimeout(function(){
            console.log("Tempo Scaduto!")
        },ms)
    }
}

// Chiamo la funzione creaTimer passando 1000ms (1 secondo)
// e immediatamente eseguo la funzione ritornata con ()
creaTimer(1000)()


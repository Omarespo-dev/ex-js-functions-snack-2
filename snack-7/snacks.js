// Snack 7 Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiEferma(msg,avvio,stop){
    const intervallo = setInterval(() => {console.log(msg)}, avvio);

    setTimeout(() => {
        clearInterval(intervallo)
        console.log("Fermato!")
    }, stop);
}

eseguiEferma("Indiano",1000,5000)
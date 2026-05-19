/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo) {
    const li = document.createElement("li");
    li.textContent = testo;
    lista.appendChild(li);
    aggiornaContatore();
}

function aggiornaContatore() {
    const tasks = lista.querySelectorAll("li");
    contatore.textContent = tasks.length;
}

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita (ok)
   2. Aggiungi bottone Elimina su ogni task
   3. evidenzia(indice) / togliEvidenza(indice)
   4. data automatica nel task
   5. contaPerPriorita()
*/

/* Modifica aggiungiTask per accettare priorita */

const aggiungiPriorityTask = function (testo, priorita) {

    const li = document.createElement("li");

    if (priorita === "alta") {
        li.classList.add("priorita-alta");
    } else if (priorita === "media") {
        li.classList.add("priorita-media");
    } else {
        li.classList.add("priorita-bassa");
    }

    const badgeTask = document.createElement("span");
    badgeTask.classList.add("badge");
    badgeTask.textContent = priorita.toUpperCase();

    const duoTask = document.createElement("div");
    duoTask.classList.add("duoTask");
    duoTask.textContent = testo;        
    duoTask.appendChild(badgeTask);     

    const adesso = new Date();
    const dataFormattata = adesso.toLocaleString("it-IT");
    
    const infoData = document.createElement("span");
    infoData.classList.add("data-task");
    infoData.textContent = dataFormattata;
    
    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "Elimina";

    const gestioneTask = document.createElement("div");
    gestioneTask.classList.add("gestione-task");
    
    gestioneTask.appendChild(infoData);
    gestioneTask.appendChild(bottoneElimina);

    li.appendChild(duoTask);       
    li.appendChild(gestioneTask);  

    lista.appendChild(li);
    aggiornaContatore();
}

aggiungiPriorityTask("Pagare le bollette", "alta");
aggiungiPriorityTask("Studiare JavaScript", "media");
aggiungiPriorityTask("Comprare il pane", "bassa");
aggiungiPriorityTask("Chiamare il dentista", "alta");
aggiungiPriorityTask("Riposarsi", "bassa");


const evidenzia = function (indice) {
    const tasks = lista.querySelectorAll("li");
    tasks[indice].classList.add("evidenziato");
}

evidenzia(1);

const togliEvidenza = function (indice) {
    const tasks = lista.querySelectorAll("li");
    tasks[indice].classList.remove("evidenziato");
}

/* togliEvidenza(); */        // toglie evidenzia, lascio nel commento per non creare problemi al codice.


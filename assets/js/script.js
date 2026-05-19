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

aggiungiTask("Studiare JavaScript");
aggiungiTask("Bere il caffÃ¨");
aggiungiTask("Riposarsi");

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   3. evidenzia(indice) / togliEvidenza(indice)
   4. data automatica nel task
   5. contaPerPriorita()
*/
let pagina=document;


// SELETTORI ----> PROPRIETA' DOCUMENT


const H1 =document.getElementById('prova');


H1.innerHTML='pippo';



const utenti = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario@email.com', citta: 'Roma' },
    { nome: 'Laura', cognome: 'Bianchi', email: 'laura@email.com', citta: 'Milano' },
    { nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe@email.com', citta: 'Napoli' }
];


const corpo =document.getElementById('corpo');


const htmlelements=utenti.map(utente => `<tr><td>${utente.nome} </td></tr>`).join('');

const tab =document.getElementById('corpo-tabella');

tab.innerHTML=htmlelements;

function ChangeColor()
{

    const h2=document.getElementById("prova1");

    h2.style.color='#ff5733';

    
}


/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
        
    },
    {
        name: 'Angela',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
        
    },
    {
        name: 'Waleter gordon',
        role: 'Chief Editor',
        image: 'walter-gordon-office-manager.jpg'
        
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
        
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
        
    },
    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: 'barbara-ramos-graphic-designer.jpg'
        
    },
]


//MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
    //MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
    //seleziono elemento della dom
const rowEl=document.querySelector('.row')
for (let i = 0; i < team.length; i++) {
    const infoPerson = team[i];
    console.log(infoPerson);
    //creo una variabile e con i backtip aggiungo i miei div con la classe col-2
    const colEL=`<div class="col-4 card my-3 text-center"><img src="./assets/img/${infoPerson.image}" alt=""><h3>${infoPerson.name}</h3><p>${infoPerson.role}</p></div>`;
    //inserisco il tutto con insertadjacenthtml
    rowEl.insertAdjacentHTML('beforeend', colEL)

}




/* dati forniti */

/* Name: Wayne Barnett
Role: Founder & CEO
Image: wayne-barnett-founder-ceo.jpg
___________________________________
Name: Angela 
Role: Chief Editor
Image: angela-caroll-chief-editor.jpg
____________________________________
Name: Waleter gordon
Role: Chief Editor
Image: walter-gordon-office-manager.jpg
____________________________________
Name: Waleter gordon
Role: Social Media Manager
Image: angela-lopez-social-media-manager.jpg
_________________________________
Name: Scott Estrada
Role: Developer
Image: scott-estrada-developer.jpg
_________________________________
Name: Barbara Ramos
Role: Grafic designer
Image: barbara-ramos-graphic-designer.jpg */
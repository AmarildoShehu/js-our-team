console.log('JS OK');

// MY LADDER

/*
// # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg

1. Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
2. Stampare su console le informazioni di nome, ruolo e la stringa della foto
3. Stampare le stesse informazioni su DOM sottoforma di stringhe
4. Trasformare la stringa foto in una immagine effettiva
5. creare layout

*/

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
const teamMembers = [
    { name: "Wayne Barnett", role: "Founder & CEO", photo: "wayne-barnett-founder-ceo.jpg" },
    { name: "Angela Caroll", role: "Chief Editor", photo: "angela-caroll-chief-editor.jpg" },
    { name: "Walter Gordon", role: "Office Manager", photo: "walter-gordon-office-manager.jpg" },
    { name: "Angela Lopez", role: "Social Media Manager", photo: "angela-lopez-social-media-manager.jpg" },
    { name: "Scott Estrada", role: "Developer", photo: "scott-estrada-developer.jpg" },
    { name: "Barbara Ramos", role: "Graphic Designer", photo: "barbara-ramos-graphic-designer.jpg" }
];

// Stampare su console le informazioni di nome, ruolo e la stringa della foto
teamMembers.forEach(member => {
    console.log(`%cNome:%c ${member.name}, %cRuolo:%c ${member.role}, %cFoto:%c ${member.photo}`, 'font-weight: bold', '', 'font-weight: bold', '', 'font-weight: bold', '');
});
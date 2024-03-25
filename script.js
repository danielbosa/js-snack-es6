/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/
const guestsList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

let guestsList2 = [];
guestsList.forEach((el,index)=>{
    guestsList2.push({
        tableName: 'Tavolo VIP',
        guestName: el,
        place: index+1
    })
});
console.log(guestsList2)


/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

const students = [
    {
        Id: '213',
        Name: 'Marco della Rovere',
        Grades: 78
    },
    {
        Id: '110',
        Name: 'Paola Cortellessa',
        Grades: 96
    },
    {
        Id: '250',
        Name: 'Andrea Mantegna',
        Grades: 48
    },
    {
        Id: '145',
        Name: 'Gaia Borromini',
        Grades: 74
    },
    {
        Id: '196',
        Name: 'Luigi Grimaldello',
        Grades: 68
    },
    {
        Id: '102',
        Name: 'Piero della Francesca',
        Grades: 50
    },
    {
        Id: '120',
        Name: 'Francesca da Polenta',
        Grades: 84
    },
]

const studentList = students.map((el)=>{
    return (el.Name).toUpperCase()
});
console.log(studentList)

const studentsOver70 = students.filter((el)=>{
    return el.Grades > 70;
});
console.log(studentsOver70);

const studentsOver70and120 = students.filter((el)=>{
    return el.Grades > 70 && el.Id > 120;
});
console.log(studentsOver70and120);

/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bike = [
    { model: "Bianchi Oltre XR4", weight: 6.8 },
    { model: "Trek Madone SLR 9", weight: 6.5 },
    { model: "Specialized S-Works Venge", weight: 6.7 },
    { model: "Cervélo S5", weight: 6.3 },
    { model: "Pinarello Dogma F12", weight: 6.9 }
];

const lowest = bike.reduce((previous, current) => {
    return current.weight < previous.weight ? current : previous;
  });
  
console.log(lowest);

/*
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreDiCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];

squadreDiCalcio.forEach((el)=>{
    el.puntiFatti = RndNumberGen(1,100),
    el.falliSubiti = RndNumberGen(1,50)
})
console.log(squadreDiCalcio)

let newSquadreDiCalcio = squadreDiCalcio.map(({nome, falliSubiti}) => ({ nome, falliSubiti }));
console.log(newSquadreDiCalcio)
//mappo il mio array di obj iniziale in modo da creare un nuovo array di obj
//cosa metto in funzione di callback del map? arrow function
//come argomento di arrow function, metto obj letterale costituito dalle due chiavi che mi interessano: nome e falliSubiti. ({nome, falliSubiti})
//cosa voglio che la arrow function mi restituisca? per ogni obj dell'array originale, un obj con due sole proprietà; quindi inserisco queste, in literal template (cioè tra parentesi tonde, il blocco costituito dalle graffe e le due proprietà: perché {nome, falliSubiti} è una sintassi di destrutturazione degli oggetti; sto dicendo a JavaScript di estrarre le proprietà nome e falliSubiti dall'oggetto passato e assegnarle a variabili con lo stesso nome. )
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
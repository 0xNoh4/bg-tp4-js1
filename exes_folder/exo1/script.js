
// list of one preson
let person = [
    {nom: "cherif", prenom: "mohamed", age: 20, note: 12, pi: Math.PI}
];

// fun called getNom
function getNom() {
    console.log(person[0].nom);
}

// fun called getPrenom
function getPrenom() {
    console.log(person[0].prenom);
}

// fun called getFullName
function getFullName() {
    console.log(person[0].nom +"-"+ person[0].prenom);
}

// fun called getAge
function getAge() {
    console.log(person[0].age)
}

// fun called getNote
function getNote() {
    console.log(person[0].note);
}

// fun called Pi
function Pi() {
    console.log(person[0].pi);
}
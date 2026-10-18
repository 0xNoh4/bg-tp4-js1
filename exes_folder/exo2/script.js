
// varible
var num = 0;

// list of students
let students = [
    {nom: "nom1", prenom: "pre1", age: 20},
    {nom: "nom2", prenom: "pre2", age: 23},
    {nom: "nom3", prenom: "pre3", age: 21}
];

// fun called studensTable
function studensTable() {
    
    // for loop with 'i' index
    for (let i=1; i<=students.length; i++) {
        console.log("Student-"+i)
    }
}

// fun called studentObj
function studentObj() {
    console.log(students[num]);
    
    // increment num +1
    num += 1;
}

// fun called studentsObjTable
function studentsObjTable() {

    // for loop
    for (let i=0; i<students.length; i++) {
        console.log(students[i].nom +"-"+ students[i].prenom +"-"+ students[i].age);
    }
}
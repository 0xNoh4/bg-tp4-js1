

// list of students
let students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// fun called A
function A() {

    // for loop
    for (const s of students) {
        // const moy of type "float"
        const moy = B(s[3]);
        
        if(moy) {
            console.log(s[0] + ": ADMIS");
        }else {
            console.log(s[0]+ ": AJOURNE");
        }
    }
}

// fun called B
function B(x) {
    return x >= 10;
}
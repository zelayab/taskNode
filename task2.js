/* tarea2
Crear una función asíncrona que demore unos segundos en completarse, pero que por dentro no tenga ninguna lógica, 
es decir, no vale usar bucles ni crear requests http, ni leer o escribir archivos.

Transformar el código que hicieron ayer de filtro de alumnos a una promesa

Utilizar ambos puntos anteriores de forma simultánea, e imprimir un texto en consola una vez que se terminen ambos procesos */


const students = [
    {
    name: 'JOHN',
    lastname: 'DOE',
    score: 4
    },
    {
    name: 'EVELYN',
    lastname: 'JACKSON',
    score: 8
    },
    {
    name: 'JAMES',
    lastname: 'SHAW',
    score: 2
    }
];

//Parametrizable Note
let mimNote = 4;

//capitalize letter
function capfLetter(name,lastname){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

//for
//for method
let std =[];
for ( let i = 0; i < students.length; i++ ){
    if(students[i].score >= mimNote){
        std.push({
            name: capfLetter(students[i].name),
            lastname: capfLetter(students[i].lastname),
            score: students[i].score
        });
    }
}
console.log(std);

//Promise .then for
const getStudentFor = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(std)
        },2000);
    });
}
async function ShowingStudentsFor() {
    const studentsShow = await getStudentFor();
    console.log(studentsShow);
}
ShowingStudentsFor();

//filter
let stdAp = students.filter(student => student.score >= 4);
console.log(stdAp);

// Promise .then to show the Arr
const getStudent = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(stdAp)
        },2000);
    });
}
/* getStudent().then((students =>
    console.log(students)));  */

async function ShowingStudents() {
    const studentsShow = await getStudent();
    console.log(studentsShow);
}

ShowingStudents();

//promises all
var promises = [
    getStudent(),
    getStudentFor()
];

promise.all(promises).then(results => {
    console.log(results);
});



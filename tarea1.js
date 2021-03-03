let students = [
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
//Primero hice un recorrido de las notas
students.forEach(students => console.log(students.score));
//utilice el forEach con el condicional If para saber quien aprobo y quien no
students.forEach(students => {
    if(students.score >= 4){
        console.log('Estudiante ' + students.name + ' ' + students.lastname + ' aprobo con ' + students.score);
    }else if ( students.score < 4){
        console.log('Estudiante ' + students.name +  ' ' + students.lastname + ' desaprobo con ' + students.score);
        }
});
//Asc. Order
let st = students.sort((a,b) => a.score - b.score);
console.log(st)

function order(x,y){
    if(x.score < y.score)
    return -1;
    if(x.score > y.score)
    return 1;
    return 0;
}
console.log(students.sort(order));
//for para saber quienes aprobaron
let std =[];
for ( let i = 0; i < students.length; i++ ){
    if(students[i].score >= 4){
        std.push(students[i]);
    }
}
console.log(std);
//do while
/* var i = students[i];
do{
    i = i >= 4;
    i++;
    console.log(students[i]);
}
while( i >= 4 );
 */


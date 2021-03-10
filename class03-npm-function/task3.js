/* create a function to rotate to the left the array and upload to npm page



/**function left rotation
 * @param  {} arr
 * @param  {} rotations
 */
// Complete the left rotation
function rotLeft(arr,rotations){
    const  arrayRoted = arr.concat();
    for(let i = 0; i < rotations; i++) {
        const frontNum = arrayRoted.shift();
        arrayRoted.push(frontNum);

    }
    return arrayRoted;
}

//rot params
const rotNum = 4;
//Original Array
const arrRot = [1,2,3,4,5];
//test sample
const result = [5,1,2,3,4];


console.log(rotLeft(arrRot,rotNum));
console.log(result);
console.log(arrRot);

/*120200910                                                                                                                                   
38503642DNI PES000000008821
20998170DNI PES000000074547
17534845DNI PES000000597964
*/


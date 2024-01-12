// // dasgal:1
// const calculate = ( B,C,D ) => {
//     return (B*C-D)
// }
// console.log("A=", calculate(5,8,3));



// dasgal:2
// const totalTime = ( day, time ) => {
//     return ( day*24 + time )
// }
// console.log("niit tsag:", totalTime(9,23));



// dasgal:3
// const max = ( too1, too2) => {
//     return( too1, too2 )
// }
// console.log("Ih too n:", max(10,30));



// dasgal:4
// const calculateArea = ( m, a) => {
//     return( m*a )
// }
// console.log(" Tegsh ontsogtiin talbai n:", calculateArea(20,30));



// dasgal:5
// const checkPoint = (onoo) => {

//     if (onoo >= 90)
//         return 'A'
//     else if (onoo >= 80) {
//         return 'B'
//     }
//     else if ( onoo >= 70)
//         return 'C'
//     else if ( onoo >= 60){
//         return 'D'
//     }
//     else  {
//         return 'F'
//     }
// }
// console.log("Usgen unelgee:", checkPoint(95));
// console.log("Usgen unelgee:", checkPoint(85));
// console.log("Usgen unelgee:", checkPoint(75));
// console.log("Usgen unelgee:", checkPoint(65));
// console.log("Usgen unelgee:", checkPoint(55));



// dasgal:6
const numbers= [1,4,23,5,7];
const findLargestElment = ( toonuud ) => {
    console.log( toonuud[0] );
    let hamgiinihToo = toonuud[0]
    for (let i = 0; i < toonuud.length ; i++) {
        const too = toonuud[i]
        console.log(too);
        if ( too > hamgiinihToo){
            hamgiinihToo = too
        }
    }
    console.log(hamgiinihToo);
    return hamgiinihToo;
}
findLargestElment(numbers)
 



// dasgal:7


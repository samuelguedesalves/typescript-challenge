import readLineSync from 'readline-sync';

function calcCircleArea(radiu: number){
    const pi : number = 3.14;
    return pi * (radiu ** 2);
}

function start (){
    const radius : number = readLineSync.questionInt('radius: ');

    console.log(`result: ${calcCircleArea(radius)}`);
}

export default start;
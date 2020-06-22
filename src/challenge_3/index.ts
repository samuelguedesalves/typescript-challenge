import readLineSync from 'readline-sync';

function calcTriangleArea (base: number, height: number){
    return ((base * height) / 2);
}

function start (){
    const base = readLineSync.questionInt('Base: ');
    const height = readLineSync.questionInt('Height: ');

    console.log(`result: ${calcTriangleArea(base, height)}`);
}

export default start;
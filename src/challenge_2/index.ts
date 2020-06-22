import readLineSync from 'readline-sync';
//createAndSumTwoNumberInterval

function sumInterval(first: number, second: number){
    let sum : number = 0;

    if(first > second){
        for(let i = second; i <= first ; i++){
            sum = i + sum;
        }
    }else{
        for(let i = first; i <= second ; i++){
            sum = i + sum;
        }
        
        return sum;
    }

}

function start(){
    const firstNumber : number = readLineSync.questionInt('First number: ');
    const secondNumber : number = readLineSync.questionInt('\nSecond number: ');

    console.log(`result:${sumInterval(firstNumber, secondNumber)}`);
}

export default start;
import * as readLineSync from 'readline-sync';

import MinutesIntoSeconds from './challenge_1/index';
import sumInterval from './challenge_2/index';
import calcTriangleArea from './challenge_3/index';
import calcCircleeArea from './challenge_4/index';

const menu : string = `
0 - exit
1 - Minute from Second
2 - Sum interval
3 - Area triangle
4 - Area circle
>
`;

console.clear();

for(var i: number = 0; i < 1 ;){
    
    const option: number = readLineSync.questionInt(menu);
    
    
    if(option === 0){
        console.clear();
        i = 1;
    }else if(option === 1){
        MinutesIntoSeconds();
    }else if(option === 2){
        sumInterval();
    }else if(option === 3){
        calcTriangleArea();
    }else if(option === 4){
        calcCircleeArea();
    }else{
        console.clear();
        console.warn('Invalid option!');
    }
}
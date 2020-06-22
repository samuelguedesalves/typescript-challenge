import readlineSync from 'readline-sync';
//convert minutes into seconds

function convertMinutesIntoSeconds (minute : number){
    let seconds: number = minute * 60;
    return seconds;
}

function start(){
    const minute = parseInt(readlineSync.question('minute: '));

    console.log(`result: ${convertMinutesIntoSeconds(minute)}`);
}

export default start;
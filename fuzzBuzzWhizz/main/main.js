'use strict';
/*function fuzbuzzwhizz(a,b,c) {
    let array=[];
    let output="";
    for(let i=0;i<=100;i++)
    {
        array.push(i);
    }
    output =array.join(" ");
    return output;
}*/
function mapNumberToWord(num) {
    let fizz = 3;
    let buzz = 5;
    let whizz = 7;
    let word="";
    if(num.toString().indexOf('3')==0){
        word='fizz';
    }
    else if(num%fizz==0){
        word ='fizz';
        if(num%buzz==0){
            word+=' buzz';
            if(num%whizz==0) {
                word+=' whizz';
            }
        }
        else if(num%whizz==0) {
            word+=' whizz';
        }
    }
    else if(num%buzz==0){
        word ='buzz';
        if(num%fizz==0){
            word+=' fizz';
        }else if(num%whizz==0){
            word+=' whizz';
        }
    }
    else if(num%whizz==0){
        word ='whizz';
        if(num%fizz==0){
            word+=' fizz';
        }else if(num%buzz==0){
            word+=' buzz';
        }
    }
    return word;
}
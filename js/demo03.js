var fs = require('fs');
var num = 1;
var renderTimer = setInterval(function(){
    if(num>5){
        num = 1;
    }
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    var txtNum = num++;
    var nowFile= fs.readFileSync(`../animation/${txtNum}.txt`,'utf8');
    process.stdout.write(nowFile);
    
},1000/24)
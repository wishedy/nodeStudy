//连续两次ctrl^c退出命令行
setInterval(function(){
    console.log('定时器循环');
},1000);
process.on("SIGINT",()=>{
    console.log('ctrl^c');
    process.exit();
});
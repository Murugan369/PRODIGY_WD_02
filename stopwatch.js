let startTime=0;
let elapsedTime=0;
let interval=null;

function startwatch()
{
    if(!interval){
        startTime=Date.now()-elapsedTime;
        interval=setInterval(update,100);
    }
}

function stopwatch()
{
    clearInterval(interval);
    interval=null;
}

function resetwatch()
{
    clearInterval(interval);
    interval = null;
    elapsedTime = 0;
    startTime = 0;
    display(0,0)
}

function update()
{
    elapsedTime=Date.now()-startTime;
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let seconds=totalSeconds%60;
    let millisec=Math.floor((elapsedTime%1000)/10);
    display(seconds,millisec);
}

function display(seconds,millisec)
{
    document.getElementById("secL").innerHTML=seconds<=9?"0"+seconds:seconds;
    document.getElementById("secR").innerHTML=millisec<=9?"0"+millisec:millisec;

}

document.getElementById("start").addEventListener("click", startwatch);
document.getElementById("stop").addEventListener("click", stopwatch);
document.getElementById("reset").addEventListener("click", resetwatch);



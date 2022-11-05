showTime();
function showTime()
{
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let ms = date.getMilliseconds();

let time = h+":"+m+":"+s+":"+ms ;
document.querySelector("#clock").innerHTML=time;setTimeout(showTime,1)
}

let screentime=document.getElementById("screentime")
let heartBeat=document.getElementById("heartButton")
let heartImage=document.getElementById("heartBeat") 
let hearttext=document.getElementById("heartValue")
let time=document.getElementById("timeButton")
function refreshTime() {

    let ct=new Date()

    let hours=ct.getHours()
    let minutes=ct.getMinutes();
    let seconds=ct.getSeconds()
    hours=ct.getHours()<10?"0" + hours:hours;
    minutes=ct.getMinutes()<10?"0" + minutes:minutes;
    seconds=ct.getSeconds()<10?"0" + seconds:seconds;

    let finalTime=hours+":"+minutes+":"+seconds
    screentime.innerHTML=finalTime
}


function heartTrigger() {
   if(window.getComputedStyle(screentime).visibility==="visible"){ 
        screentime.style="visibility:hidden";
    }
    heartImage.style.visibility="visible"
    hearttext.style.visibility="visible"
    hearttext.innerHTML="78"
}

function colorChange() {
let colors=document.querySelector(".colorContainer")
let image=document.getElementById("image");

    colors.addEventListener(("click"),function(e){
    if(e.target.id==="blackPallet") {
        image.src="./images/black.png"
    }
    else if(e.target.id==="bluePallet") {
        image.src="./images/blue.png"
    }
    else if(e.target.id==="pinkPallet") {
        image.src="./images/pink.png"
    }
    else if(e.target.id==="purplePallet") {
        image.src="./images/purple.png"
    }
    else {
        image.src="./images/red.png"
    }
})
}

let execute=()=>{

time.addEventListener("click",function(){
    if(window.getComputedStyle(heartImage).visibility==="visible"){
        heartImage.style="visibility:hidden"
        hearttext.style="visibility:hidden"
    }
    screentime.style.visibility="visible"
    setInterval(refreshTime,1000)
})

heartBeat.addEventListener(("click"),function(e){
    heartTrigger()
})
}


execute()
colorChange()
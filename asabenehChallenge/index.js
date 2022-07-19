const body=document.querySelector("body")
cnst list=document.querySelectorAll("li")
const head1=document.querySelector('h1')
const head2=document.querySelector('h2')
let paragraph=document.querySelector("p")
let icon=document.querySelectorAll('i')
let classStatus=document.querySelectorAll(".classStatus")
let languages=document.querySelectorAll(".languages")

const bodyEdit=()=>{
body.style.textAlign="center"
body.style.fontFamily="sans-serif"
}
bodyEdit()


list.forEach((element)=>{
    element.style.listStyle="none"
    element.style.width="600px"
    element.style.margin="0 auto"
    element.style.minheight="60px"
})

const head1Edit=()=>{
head1.innerHTML="<h1>Asabeneh Yetayeh challenges in <span id='year'> 2020</span></h1>"
head1.style.fontSize="12px"
}
head1Edit()


const yearEdit=()=>{
let year=document.getElementById("year")
year.style.fontSize="100px"
setInterval(()=>{
let hexcolor=Math.floor(Math.random()*16777215).toString(16)
year.style.color='#'+hexcolor
},1000)
}
yearEdit()

head2.style.textDecoration="underline"
head1.style.fontSize="12px"


let time=()=>{
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currenttime=new Date()
let monthname = months[currenttime.getMonth()];
let date=currenttime.getDate()
let year=currenttime.getFullYear()
let hour=currenttime.getHours()
let standardhour=hour%12
standardhour=standardhour<10?"0"+standardhour:standardhour
let minutes=currenttime.getMinutes()
minutes=minutes<10?"0"+minutes:minutes
let seconds=currenttime.getSeconds()
seconds=seconds<10?"0"+seconds:seconds
let format=`${monthname} ${date},${year} ${standardhour}:${minutes}:${seconds}`


paragraph.innerHTML=format
paragraph.style.margin="0 auto"
const hexcolor=Math.floor(Math.random()*16777215).toString(16)
paragraph.style.background="#"+hexcolor
paragraph.style.width="200px"
}

setInterval(time,1000)

let listedit=()=>{
    list[0].style.background="#5BBC7A"
    list[0].style.display="grid"
    list[0].style.gridTemplateColumns="auto auto auto"
    list[0].style.justifyContent="space-between"
    list[0].style.paddingLeft="10px"
    list[0].style.paddingTop="15px"
    list[0].style.border="2px solid white"

    list[1].style.background="#F7DC5C"
    list[1].style.justifyContent="space-between"
    list[1].style.display="grid"
    list[1].style.gridTemplateColumns="auto auto auto"
    list[1].style.paddingLeft="10px"
    list[1].style.paddingTop="15px"
    list[1].style.border="2px solid white"

    for(let i=2;i<7;i++){

    list[i].style.background="#EB695B"
    list[i].style.justifyContent="space-between"

    list[i].style.display="grid"
    list[i].style.gridTemplateColumns="auto auto auto"
    list[i].style.paddingLeft="10px"
    list[i].style.paddingTop="15px"
    list[i].style.border="2px solid white"
    }
}
listedit()

let eventlistner=()=>{
for(let i=0;i<=7;i++){
    classStatus[i].style.marginRight="15px"
    icon[i].style.fontSize="14px"
        languages[i].style.display="none"
    languages[i].style.overflow="hidden"
    icon[i].addEventListener("click",()=>{
        if(languages[i].style.display === "block") {
            languages[i].style.display="none"
        }
        else{
            languages[i].style.display="block"
        }
    })
   
}
}
eventlistner()o

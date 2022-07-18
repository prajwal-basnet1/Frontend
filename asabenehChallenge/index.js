const body=document.querySelector("body")
const list=document.querySelectorAll("li")
const head1=document.querySelector('h1')
const head2=document.querySelector('h2')
let paragraph=document.querySelector("p")

const bodyEdit=()=>{
body.style.textAlign="center"
body.style.fontFamily="sans-serif"
}
bodyEdit()


list.forEach((element)=>{
    element.style.listStyle="none"
    element.style.width="600px"
    element.style.margin="0 auto"
    element.style.height="40px"
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
    list[0].style.display="flex"
    list[0].style.paddingLeft="10px"
    list[0].style.paddingTop="15px"
    list[0].style.border="2px solid white"
    
    list[6].style.background="#F7DC5C"
    list[6].style.display="flex"
    list[6].style.paddingLeft="10px"
    list[6].style.paddingTop="15px"
    list[6].style.border="2px solid white"

    for(let i=1;i<6;i++){

    list[i].style.background="#EB695B"
    list[i].style.display="flex"
    list[i].style.paddingLeft="10px"
    list[i].style.paddingTop="15px"
    list[i].style.border="2px solid white"

    }
}
listedit()
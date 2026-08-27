import  scrolltotop  from "../utils.js";
const observer=new IntersectionObserver((y)=>{
    y.forEach((yin)=>{
        if(yin.isIntersecting){
            // console.log(yin.target)
            yin.target.classList.add("visible")
        }
        else{
            yin.target.classList.remove("visible")
        }
    })
},{})

const headings=document.querySelectorAll("h2")
headings.forEach(i => observer.observe(i))

const sections=document.querySelectorAll("section")
sections.forEach(j => observer.observe(j))

let indicator=document.getElementById("indicator")
let documentHeight=document.documentElement.scrollHeight;
let viewportHeight=document.documentElement.clientHeight;

window.onscroll=function (){  
    console.log("hi") 
    console.log(scrollY)
    let percentagescrolled=(scrollY/(documentHeight-viewportHeight))*100
    if(percentagescrolled<20){
         indicator.style.width=100+"%"
         indicator.style.backgroundColor="antiquewhite"
    }
    else if(percentagescrolled<40){
       
        indicator.style.width=20+"%"
        indicator.style.backgroundColor="cadetblue"
    }
    else if(percentagescrolled<60){
       
        indicator.style.width=40+"%"
        indicator.style.backgroundColor="cadetblue"
    }
    else if(percentagescrolled<80){
       
        indicator.style.width=60+"%"
        indicator.style.backgroundColor="brown"
    }
    else if(percentagescrolled<100){
       
        indicator.style.width=80+"%"
        indicator.style.backgroundColor="brown"
    }
    else{  
        indicator.style.width=100+"%"
    }
   
    if(scrollY >= 300){
        document.getElementById("down").style.display="block"
    }
    else{
        document.getElementById("down").style.display="none"
    }

    scrolltotop( document.getElementById("down"))
    
}
import { fetchdata,renderfigure } from "../utils.js";

function wrapgallery(){
    const gallery=document.getElementsByTagName("figure")
    console.log(gallery);
    
let overlay=document.getElementById("overlay")
let displayimage=document.getElementById("displayimage")
let idcounter=0
let tab_flag=0
let copy=0
console.log("Check --1 ")
for(let i of gallery){
    console.log("running")
    i.setAttribute("id","person"+idcounter)
    idcounter++;
    i.addEventListener("click",()=>{
        // console.log("Hi")
        copy=i.getAttribute("id").at(-1)
         document.getElementById("team").style.overflow="hidden"
        overlay.classList.add("smooth")
        tab_flag=1

        // function add(i){
        //     const imageSelected=i.querySelector("img")
        //     const imagecopy=imageSelected.cloneNode(true)
        //     imagecopy.setAttribute("width","600px")
        //     imagecopy.setAttribute("height","600px")
        //     imagecopy.setAttribute("id","temporary")
        //     displayimage.append(imagecopy)
        // }
        add(i)    
    })     
}
function add(i){
    console.log("add")
    const imageSelected=i.querySelector("img")
    const imagecopy=imageSelected.cloneNode(true)
    imagecopy.setAttribute("width","600px")
    imagecopy.setAttribute("height","600px")
    imagecopy.setAttribute("id","temporary")
    if(!displayimage.querySelector("img")){
        displayimage.append(imagecopy)
    }
}
function next(){
    console.log("--2 Called next");
    copy=(copy+1)%gallery.length;
    const nextimage=document.getElementById("person"+copy)
    const image=document.getElementById("temporary")
    image.remove()
    add(nextimage)
}

function back(){
    console.log("--2 Called back");
    copy=copy-1<0?gallery.length-1:copy-1
    const nextimage=document.getElementById("person"+copy)
    let image=document.getElementById("temporary")
    image.remove()
    add(nextimage)
}
function closegallery(){
    let image=document.getElementById("temporary")
    if(image==null) return
    image.remove()
    tab_flag=0
    document.getElementById("overlay").classList.remove("smooth")
    document.getElementById("team").style.overflow="visible"
}
let a=document.getElementById("closeimage")
let b=document.getElementById("leftarrow")
let c=document.getElementById("rightarrow")
let count=0
window.addEventListener("keydown",(e)=>{
    if(e.key=="Escape"){
        closegallery()
     }
    if(e.key=="ArrowRight"){
        next()
    }
    if(e.key=="ArrowLeft"){
        back()
    }
    if(e.key=="Tab" && tab_flag==1){
        // const buttons=overlay.querySelectorAll("button")
        e.preventDefault()
        if(count==0){
            a.focus()
            count++
        }
        else if(count==1){
            b.focus()
            count++
        }
        else{
            c.focus()
            count=0
        }
    }
})

document.getElementById("leftarrow").addEventListener("click",()=>{
    back()
})
document.getElementById("rightarrow").addEventListener("click",()=>{
    next()
})
document.getElementById("closeimage").addEventListener("click",()=>{
    closegallery()
})

}
wrapgallery()
// fetchdata("https:/jsonplaceholder.typicode.com/users")
document.getElementById("api_user").addEventListener("click",()=>{
    const placeholder=document.createElement("article")
    placeholder.setAttribute("class","load")
    let targetDOM=document.getElementById("fetchuser_cards")
    async function getdata() {
    const promise=await fetchdata("https:/jsonplaceholder.typicode.com/users")
    const initfetch=await promise
      for (let i = 0; i < 5; i++) {
        const clone=placeholder.cloneNode(true)
        targetDOM.append(clone)
      }
      let c=1
    for (let i = 0; i < 5; i++) {
    c++
        setTimeout(()=>{
        // console.log(document.querySelector(".load"))
        document.querySelector(".load").remove()
        renderfigure(initfetch[i], targetDOM);
        },300*c)
    }
    setTimeout(()=>{
        wrapgallery()
    },300*c)
    
    }
    // console.log(targetDOM.innerHTML)
    if(!(targetDOM.innerHTML.trim())){
        getdata()
        const gallery=document.getElementsByTagName("figure")
        console.log(gallery)
        for(let i of gallery){
            i.removeAttribute("id")
            // i.removeEventListener("click")
            console.log(i)
        }
    }
})
export function initNav() {
  // hamburger DOM setup & event listeners go here

const hamBurgerBtn=document.getElementById("hamburgerdiv")
const drawer = document.getElementById("close")
const main=document.getElementsByTagName("main")
const body=document.getElementsByTagName("body")
const mainoverlay=document.getElementById("mainoverlay-off")
console.log("--1 . What is logged below, our <main>?? ")
console.log(main[0])
// const temp=document.getElementById("temp")
let x=0;
console.log("--2. Check if this is the five links.. ")
console.log(drawer)
const drawer_links = drawer.querySelectorAll("a")
console.log("--3. 5 links form the drawer is selected? ")
console.log(drawer_links)

console.log("--3.5 -> CHeck the button")

console.log(hamBurgerBtn)
hamBurgerBtn.addEventListener("click",() => {
   console.log("--4 Clicked the button");
    if (hamBurgerBtn.getAttribute("aria-expanded")=="false"){
        console.log("--4.5. In aria-false")
        expanded()
    }
    else{
        console.log("--4.5. In aria-true")
        not_expanded()
    }  
}
)

//  console.log("--6. if error this wont come")
function expanded(){
        console.log("--5. In function")
        hamBurgerBtn.setAttribute("aria-expanded","true")
        drawer.setAttribute("id","open") 
        // drawer.style.display="flex"
        // body[0].style.backgroundColor=colorhelper("dim-white");
        mainoverlay.setAttribute("id","mainoverlay-on") 
        body[0].style.overflow="hidden"      
}
function not_expanded(){
        console.log("--5. In function")
        hamBurgerBtn.setAttribute("aria-expanded","false")
        // drawer.style.display="none"
        drawer.setAttribute("id","close") 
        // body[0].style.backgroundColor=colorhelper("black");
        mainoverlay.setAttribute("id","mainoverlay-off") 
        body[0].style.overflow="scroll" 
}

window.addEventListener('keydown', (e)=>{
    // console.log(e.key)
    if(e.key==="Escape"){
        not_expanded()
    }
})

main[0].addEventListener('click', () =>{
    not_expanded()
})

let mql=window.matchMedia("(width<600px)")
window.addEventListener("resize",()=>{
    console.log("--7. Media changed")
    if(!mql.matches){
        body[0].style.overflow="scroll" 
        mainoverlay.setAttribute("id","mainoverlay-off") 
    }
})
console.log(drawer_links)
window.addEventListener("keydown", (e) =>{
    console.log(e.key)
    // console.log(x)
    if (e.key==="Tab"){
        
        e.preventDefault()
        console.log(drawer_links[x])
        drawer_links[x].focus({focusVisible:true})
        if(x===drawer_links.length-1){
            console.log(x)
            x=0;
        }
        else{
            console.log(x)
            x++;
            
            
        }
    }
})

}

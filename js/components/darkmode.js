export function initDarkMode() { // or export default function init()
  // dark mode DOM setup & event listeners go here

let tog= document.getElementById('toggle_btn')
let html_tag=document.querySelector('html')
    let dark_mode=localStorage.getItem('darkmode')

tog.addEventListener ("click" ,() => {

    // let local_storage="dark_mode";

    let theme_value=html_tag.getAttribute("data-theme");

    if (theme_value==="dark"){
        localStorage.setItem('darkmode','off')
        html_tag.setAttribute("data-theme","light")
        tog.setAttribute("aria-pressed","light-mode")
    }
    else{
        localStorage.setItem('darkmode','active')
    html_tag.setAttribute("data-theme","dark")
    tog.setAttribute("aria-pressed","dark-mode")
    }
    console.log(html_tag.getAttribute("data-theme"))
    console.log(tog.getAttribute("aria-pressed"))
    
    })

    if (dark_mode==="active"){
    html_tag.setAttribute("data-theme","dark")
    }
else{
    html_tag.setAttribute("data-theme","light")
    }
}


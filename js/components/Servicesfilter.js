// function sayHi() {
//   alert('Hello');
// }
// setTimeout(sayHi,4000)
// setInterval(sayHi, 3000);
// setTimeout(functionname,TimeRanges,arguments)const
import {fetchdata,render} from "../utils.js"
// let abort;
let timer;
let count=6
let start=0
let end=0
const targetDOM=document.getElementById("article-container")
const input=document.getElementById("search")
const nomatch=document.getElementById("no-matches-text")
const placeholder=document.createElement("article")
placeholder.setAttribute("class","load")
async function getdata() {
  const promise=await fetchdata("https:/jsonplaceholder.typicode.com/posts")
  const initfetch=await promise
  document.getElementById("add-fictional-services").addEventListener("click",()=>{
    console.log("--check 1 : Add button working");
      end+=count 
    if (start >= 100) {
        start = 0;
        end = 0;
    } else {
      const limit = Math.min(end, 100, initfetch.length);
      for (let i = start; i < limit; i++) {
        const clone=placeholder.cloneNode(true)
        targetDOM.append(clone)
      } 
      let c=1
        for (let i = start; i < limit; i++) {
          c++
            setTimeout(()=>{
              // console.log(document.querySelector(".load"))
              document.querySelector(".load").remove()
              render(initfetch[i], targetDOM);
            },300*c)
        }
        start = limit;
    }
  })
}
getdata()
// const promise=fetchdata("https:/jsonplaceholder.typicode.com/posts")
// const initfetch=promise.then((data)=>{console.log(data);

//   return data})
// render(fetchdata("https:/jsonplaceholder.typicode.com/posts"),targetDOM)

input.addEventListener("keyup",()=>{
  clearTimeout(timer)
  timer = setTimeout(()=>{
      console.log(input.value)
      console.log("Searching...")

      filter_cards(input.value)
  },300)
  document.getElementById("content-x").addEventListener("click",()=>{
  input.value=""
  filter_cards(input.value)
  })
})

input.addEventListener("blur",()=>{
  nomatch.style.display="none"
  const articles=document.querySelectorAll("article")
  for (const i of articles){
     i.removeAttribute("style")
  }
})

function filter_cards(key){
  let matchedflag=0
  const articles=document.querySelectorAll("article")
  // const no=document.getElementById("no-matches-text");
 
  if(key=="" ||  key==" "){
     document.getElementById("content-x").style.display="none"
     articles.forEach(element => {
       element.style.color="grey"
       element.innerHTML=element.innerHTML.replace(`<span id="matched">`,``)
       element.innerHTML=element.innerHTML.replace(`</span>`,``)
     });
  }
  else{
  // document.getElementById("content-x").style.display="block"
  // no.style.display="none"
  for (const i of articles){
  const text = i.textContent
  if (text.includes(key)){
    matchedflag=1
    i.removeAttribute("style")
    i.innerHTML=i.innerHTML.replace(`<span id="matched">`,``)
    i.innerHTML=i.innerHTML.replace(`</span>`,``)
    i.innerHTML=i.innerHTML.replace(key, `<span id="matched">${key}</span>`)
    console.log("Got'emm")
  }
  else{
    i.style.color="grey"
    i.innerHTML=i.innerHTML.replace(`<span id="matched">`,``)
    i.innerHTML=i.innerHTML.replace(`</span>`,``)
  }
  if(matchedflag){
    nomatch.style.display="none"
  }
  else{
    nomatch.style.display="flex"
  }
}
}
}

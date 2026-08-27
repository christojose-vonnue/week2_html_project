import {fetchdata,render} from "../utils.js"
const placeholder=document.createElement("article")
const targetDOM=document.getElementById("article-container")
placeholder.setAttribute("class","load")
let count=3
let start=0
let end=0
async function getdata() {
  const promise=await fetchdata("https:/jsonplaceholder.typicode.com/posts")
  const initfetch=await promise
  document.getElementById("add-fictional-services").addEventListener("click",()=>{
    targetDOM.innerHTML=""
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
export default function scrolltotop(element){
        element.addEventListener("click",()=>{
        window.scrollTo(0,0)
    })
}

// 1. Data Fetcher Engine (fetchJSON)

// input = url, output =  the json body, error handling , abort control
let abort=null;
export async function fetchdata(url) {
    try {
        if(abort){ 
            abort.abort()
            return // i assume if abort has a controller then we end the function, i.e abort it
        }
        abort=new AbortController()
        console.log(abort);
        
        const response =await window.fetch(url,{signal:abort.signal})  // "https:/jsonplaceholder.typicode.com/posts"
        if(!(response.ok)){
            if(response.status==404){
                console.warn("wrong url")
                throw new Error("wrong url")
            }
            else if(response.status>=300){
                console.warn("Error 300+")
                throw new Error("check response status")
            }
        }
        const body= await response.json()

        console.log(response);
        console.log(body); 
        return body
    } catch (err) {
        console.log(err)
    }
}

// json object sample : 
// body
// : 
// "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id
// : 
// 1
// title
// : 
// "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId
// : 
// 1


export function render(object,targetDOM){
    const div=document.createElement("article")
    div.innerHTML=
    `<h2>${object.title}</h2>
    <p>${object.body}</p>`
    div.setAttribute("class","content")
    console.log(div);
    targetDOM.append(div)
}

export function renderfigure(object,targetDOM){
    const div=document.createElement("figure")
    div.innerHTML=
    `<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${object.id}" alt="image not available"
    <figcaption><h3>${object.name}</h3></figcation>`
    console.log(div);
    targetDOM.append(div)
}                                              


export function initAccordion() {
  // accordion DOM setup & event listeners go here
  const select_div=document.getElementById("select-container")
  const inner_divs=select_div.getElementsByClassName("faqcontainer")
  
  const x=sessionStorage.getItem("id")
  console.log(x)
  if(x!=null){
      const final_content=document.getElementById(x).querySelector("div")
      console.log(final_content)
      final_content.style.height="30px"
      document.getElementById(x).querySelector("input").setAttribute('aria-expanded','true') 
  
  
  
  select_div.addEventListener("click",(evt)=>{
      final_content.style.height="0px"
      let y=evt.target.closest("input")
      console.log(y)
      if(!y) return
      let radio_id=y.getAttribute("id")
      y.setAttribute('aria-expanded','true')    
      for (let j of inner_divs){
          const k=j.querySelector("input")
          // console.log(k)
          if(k.getAttribute("id")!=radio_id){
               console.log("entered")
               k.setAttribute('aria-expanded','false')
          }
          else{
              sessionStorage.setItem("id",j.getAttribute("id"))
          }
      }
      
  })
  }
  else{
      select_div.addEventListener("click",(evt)=>{
      let y=evt.target.closest("input")
      console.log(y)
      if(!y) return;
      let radio_id=y.getAttribute("id")
      y.setAttribute('aria-expanded','true')    
      for (let j of inner_divs){
          const k=j.querySelector("input")
          // console.log(k)
          if(k.getAttribute("id")!=radio_id){
               console.log("entered")
               k.setAttribute('aria-expanded','false')
          }
          else{
              sessionStorage.setItem("id",j.getAttribute("id"))
          }
      }
      
  })
  }
  
  let curr_index=0
  window.addEventListener("keydown",(e)=>{
      console.log(e.key)
      const label_list=select_div.querySelectorAll("label")
      let length=label_list.length
      if(e.key=="Home"){
          const first=label_list[0]
          console.log(first)
          first.focus({focusVisible:true})
          curr_index=0
      }
      else if(e.key=="End"){
          const last=label_list[length-1]
          console.log(last)
          last.focus({focusVisible:true})
          curr_index=length-1
      }
  
      else if(e.key=="ArrowDown"){
          e.preventDefault()
          curr_index=(curr_index+1)%length
          console.log(label_list[curr_index])
          const up=label_list[curr_index]
          up.focus({focusVisible:true})
      }
      else if(e.key=="ArrowUp"){
          e.preventDefault()
          curr_index=(curr_index==0)?(length-1):curr_index-1
          console.log(label_list[curr_index])
          const down=label_list[curr_index]
          down.focus({focusVisible:true})
      }
  })
  

}  


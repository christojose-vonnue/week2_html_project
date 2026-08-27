class FormValidator{
    constructor(form,rules){
        this.form=form
        this.rules=rules //rules maps field names to arrays of rule objects
    }
    validateField(input,value){
        console.log(".......... INPUT PASSED TO CLASS FORMVALIDATOR")
        console.log(input)
        //Step 3 -  get the name of these the input
        // console.log(input.getAttribute("name")+"   ->  "+value)
        //Step 4 - check what all rules are applicable to it
        for(let i of Object.entries(this.rules)){
            console.log("--2 Check ..")
            if(input.getAttribute("name")==i[0]){
                console.log(i[0])
                console.log(input.getAttribute("name"))
                // console.log(i[1])
                for(let j of i[1]){

                    if(j=="required"){
                        console.log(j)
                        //Step-5 Call if the rule match
                        this.required(input,value)
                    }
                    if(j=="pattern"){
                        this.pattern("u_name",input,value)
                    }
                    if(j=="email"){
                        this.email(input,value)
                    }
                    if(j=="patternphone"){
                        this.pattern("u_pno",input,value)
                    }
                    if(j=="patternpass"){
                         this.pattern("u_password",input,value)
                    }
                    if(j=="minlength"){
                        this.minlength(3,input,value)
                    }
                    if(j=="maxlength"){
                        this.maxlength(30,input,value)
                    }
                    if(j=="match"){
                       this.match(document.getElementById("password").value)
                    }
                }
            }
        }
    }
    validateallField(){
        
    }
    required(input,value){
        const span=input.nextElementSibling
        console.log(value)
        if(value==null || value.trim().length==0){
            // console.log(span)
            //Step-6 , If the rule fails, add the span
            // console.warn("Enter something")
            // console.log(input.getAttribute("id"))
            span.classList.remove("valid")
            span.classList.add("invalid")
        }
        else{
            
            span.classList.remove("invalid")
            span.classList.add("valid")
        }
    }
    pattern(name,input,value){
        if(name=="u_name"){
            let result=/^[a-zA-Z ]+$/.exec(value)
            const namepattern=document.getElementById("namepattern")
            if(result==null){
                namepattern.classList.remove("valid")
                namepattern.classList.add("invalid")
            }
            else{
                namepattern.classList.remove("invalid")
                namepattern.classList.add("valid")             
            }
        }
        else if(name=="u_pno"){
            let result=/^\d{10}$/.exec(value)
            const namepattern=document.getElementById("pnopattern")
            if(result==null){
                namepattern.classList.remove("valid")
                namepattern.classList.add("invalid")
            }
            else{
                namepattern.classList.remove("invalid")
                namepattern.classList.add("valid")             
            }
        }
        else if(name=="u_password"){
            let result=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/.exec(value)
            const passpattern=document.getElementById("passpattern")
            const confirmpassword=document.getElementById("confirmpassword")
            if(result==null){
                passpattern.classList.remove("valid")
                passpattern.classList.add("invalid")
                confirmpassword.disabled=true
            }
            else{
                passpattern.classList.remove("invalid")
                passpattern.classList.add("valid") 
                confirmpassword.disabled=false            
            }
            return result        
        }
    }
    email(input,value){
        let result = /^[a-zA-Z]\w*@\w+\.[a-z]{3}$/.exec(value);
        const emailpattern=document.getElementById("emailpattern")
        if(result==null){
            emailpattern.classList.remove("valid")
            emailpattern.classList.add("invalid")
        }
        else{
            emailpattern.classList.remove("invalid")
            emailpattern.classList.add("valid")             
        }
    }
    minlength(n,input,value){
        if(input.name=="u_text"){
            const textmin=document.getElementById("textmin")
            if(value.length<20){
                textmin.classList.remove("valid")
                textmin.classList.add("invalid")
            }
            else{
                textmin.classList.remove("invalid")
                textmin.classList.add("valid")           
            }
            return
        }
        else if(input.name=="u_name"){
            const namemin=document.getElementById("namemin")
            if(value.length<3){
                namemin.classList.remove("valid")
                namemin.classList.add("invalid")
            }
            else{
                namemin.classList.remove("invalid")
                namemin.classList.add("valid")           
            }
            return
        }
    }
    maxlength(n,input,value){
        const namemax=document.getElementById("namemax")
        if(value.length>30){
            namemax.classList.remove("valid")
            namemax.classList.add("invalid")
        }
        else{
            namemax.classList.remove("invalid")
            namemax.classList.add("valid")           
        }
    }
    match(fn){
        const confirmpassword=document.getElementById("confirmpassword")
        const confirmpasswordalert=document.getElementById("confirmpasswordalert")
        console.log(confirmpasswordalert.value)
        if(confirmpassword.value!=fn){
            confirmpasswordalert.classList.remove("valid")
            confirmpasswordalert.classList.add("invalid")              
        }
        else{
            confirmpasswordalert.classList.remove("invalid")
            confirmpasswordalert.classList.add("valid")  
        }
    }
}

const rules={ u_name: ["required","pattern","minlength","maxlength"],
              u_emailid : ["required","email"],
              u_pno : ["required","patternphone"],
              u_dept : ["required"],
              u_text: ["required","minlength"]
 }

const form=document.querySelector("form")

const validatingobject=new FormValidator(form,rules)
// console.log(validatingobject)
// Step - 1 Add n event listeners

const inputFields=document.querySelectorAll("input")
const selectField=document.querySelector("select")
const textField=document.querySelector("textarea")
const allbutton=document.getElementById("allbutton")
inputFields.forEach(element => {
    element.addEventListener("blur",()=>{
        // Step 2 - each element and its value is passed to the class
        validatingobject.validateField(element,element.value)  
    })
});
selectField.addEventListener("blur",()=>{
    validatingobject.validateField(selectField,selectField.value)
})

textField.addEventListener("blur",()=>{
    console.log("-- Check 1");
    console.log(textField)
    console.log(textField.value)
    validatingobject.validateField(textField,textField.value)
})
const formoverlay=document.getElementById("formoverlay")
const toast=document.getElementById("toast")
//Submit button
allbutton.addEventListener("click",(e)=>{
    e.preventDefault()
    // form.preventdefault()
    formoverlay.className="formoverlay-on"
    toast.setAttribute("class","toast-off")
    setTimeout(()=>{
        inputFields.forEach(element => {
            validatingobject.validateField(element,element.value)
        })
        validatingobject.validateField(selectField,selectField.value)
        validatingobject.validateField(textField,textField.value)
        const invalid_array=document.getElementsByClassName("invalid")
        console.log(invalid_array)
        formoverlay.className=""
        if(invalid_array.length==0){
            toast.setAttribute("class","toast-on")
        }
        else{
            toast.setAttribute("class","toast-off")
        }
    },1500)
})




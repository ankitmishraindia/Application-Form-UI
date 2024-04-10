document.addEventListener('DOMContentLoaded',function(){

    //sidebar hiding/opening
    
    const sidebar=document.getElementById('sidebar');
    const menu=document.getElementById('menu')
    const main=document.getElementById('main')

    menu.addEventListener('click',()=>{
        if(window.innerWidth>767.99){
             sidebar.classList.toggle('hidden')
        main.classList.toggle('main')
        }
        if(window.innerWidth<768){
        sidebar.classList.toggle('show')
    }
    })
   
//close sidebar arrow
const closeArrow=document.getElementsByClassName('close-sidebar')
closeArrow[0].addEventListener('click',()=>{
    sidebar.classList.remove('show')
})

   

//////set value of present address to permanent address by checkbox
const housenoPresent=document.getElementById('housenopst')
const localityPresent=document.getElementById('localitypst')
const statePresent=document.getElementById('statepst')
const pincodePresent=document.getElementById('pincodepst')
const stayPresent=document.getElementById('periodstaypst')

const sameAsPresentCheck=document.getElementById('sameaddress')

let housenoPrmnt=document.getElementById('housenoPmnt')
let localityPmnt=document.getElementById('localityPmnt')
let statePmnt=document.getElementById('statePmnt')
let pincodePmnt=document.getElementById('pincodePmnt')
let stayPmnt=document.getElementById('periodstayPmnt')

sameAsPresentCheck.addEventListener('change',function(){
    if(this.checked){
        housenoPrmnt.value=housenoPresent.value;
        localityPmnt.value=localityPresent.value;
        statePmnt.value=statePresent.value;
        pincodePmnt.value=pincodePresent.value;
        stayPmnt.value=stayPresent.value;
       
    }else{
        housenoPrmnt.value="";
        localityPmnt.value="";
        statePmnt.value="";
        pincodePmnt.value="";
        statePmnt.value="";
    }
})

//open passpost details only after applied check///////////
const availableRadio=document.getElementById('available')
const notAvilableRadio=document.getElementById('notavailable')
const appliedRadio=document.getElementById('applied')

const visaOption=document.getElementById('visa')

const passportDetailBox=document.getElementById('passportDetail')
const visaBox=document.getElementById('visaBox')
const visaInfoBox=document.getElementsByClassName('visaInfo')

availableRadio.addEventListener('change',passportBoxtoggle)
notAvilableRadio.addEventListener('change',passportBoxtoggle)
appliedRadio.addEventListener('change',passportBoxtoggle)
 
//function for select visa availability
visaOption.addEventListener('change',function(){
    if(this.value==='yes'){
        visaInfoBox[0].classList.remove('d-none')
        visaInfoBox[1].classList.remove('d-none')
        
    }
    if(this.value==='no'||this.value===''){
        visaInfoBox[0].classList.add('d-none')
        visaInfoBox[1].classList.add('d-none')
        
    }
    
})
   
//
function passportBoxtoggle(){
    if(availableRadio.checked){
        passportDetailBox.classList.remove('d-none')
        visaBox.classList.remove('d-none')
   }else{
           passportDetailBox.classList.add('d-none')
           visaBox.classList.add('d-none')
   }
}

/////family show info if checkbox is checked
const familyCheckInput=document.getElementsByClassName('family-checkbox')
const familyInfoBox=document.getElementsByClassName('family-info')

for(let i=0;i<6;i++){
    familyCheckInput[i].addEventListener('change',function(){
        if(this.checked)
        familyInfoBox[i].classList.remove('d-none')
        else{
            familyInfoBox[i].classList.add('d-none')
        }
    })
}

//form validation
const form=document.getElementById('form')

const formInput=document.getElementsByTagName('input')

const errorMessage=document.getElementsByClassName('error')

const selectInput=document.getElementsByTagName('select')

form.addEventListener('submit',(event)=>{
     event.preventDefault()
     validateForm()
     
})

function validateForm(){
    //set all input errors to display none
    for(let k=0;k<errorMessage.length;k++){
        errorMessage[k].classList.add('d-none')
        formInput[k].classList.remove('border-danger')
    }
    //set all select errors to display none
    for(let k=0;k<selectInput.length;k++){
        errorMessage[k].classList.add('d-none')
        selectInput[k].classList.remove('border-danger')
    }


    //set first four input field error message
    for(let i=1;i<5;i++)
    if(formInput[i].value.trim()===''){
        errorMessage[i].classList.remove('d-none')
         errorMessage[i].innerHTML=`Required Field.`
         formInput[i].classList.add('border-danger')
         formInput[i].focus()
         return;
    }
    //set error in sex select box
    if(selectInput[1].value===''){
        errorMessage[7].classList.remove('d-none')
        errorMessage[7].innerHTML='please select sex';
        selectInput[1].classList.add('border-danger')
       selectInput[1].focus()
       return false;
    }

    //set error in mobile 
    if(formInput[10].value===''){
        errorMessage[13].classList.remove('d-none')
         errorMessage[13].innerHTML=`Moblie number is required.`
         formInput[10].classList.add('border-danger')
         formInput[10].focus()
         return;
    }
    if(formInput[10].value.length!==10){
        errorMessage[13].classList.remove('d-none')
         errorMessage[13].innerHTML=`Number must be 10 digit.`
         formInput[10].classList.add('border-danger')
         formInput[10].focus()
         return;
    }

    //set error form email
    if(formInput[11].value===''){
        errorMessage[14].classList.remove('d-none')
         errorMessage[14].innerHTML=`Email is required.`
         formInput[11].classList.add('border-danger')
         formInput[11].focus()
         return;
    }
    if(!formInput[11].value.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        errorMessage[14].classList.remove('d-none')
         errorMessage[14].innerHTML=`Enter a valid email.`
         formInput[11].classList.add('border-danger')
         formInput[11].focus()
         return;
    }
    
    window.location.href="./pages/success.html"
    
}

///////////CLICK AND HOVER EFFECT ON SIDEBAR BUTTONS
const sidebarBtnContainer=document.getElementById('sidebar-btn-container')
const sidebarButtons=Array.from(sidebarBtnContainer.children);
const formChild=document.getElementById('form').children;

sidebarButtons.forEach(btn=>{
    btn.addEventListener('click',function(){
        //add and hide active class of buttons
        sidebarButtons.forEach(item=>item.classList.remove('active'))
        btn.classList.add('active')
        
        //add and hide of form sections
        const targetId=btn.getAttribute('data-target');
        const targetSection=document.getElementById(targetId)
        if(targetSection){
            //set all sections to hide
            for(let j=0;j<formChild.length;j++){
                formChild[j].classList.add('trans')
                formChild[j].classList.add('d-none')
                
            }
            targetSection.classList.remove('d-none')
            console.log(targetSection)
        }

        //set heading text
        const heading=document.getElementById('heading')
        heading.textContent=btn.textContent;
    })
})

//add functionality in the language butttons
const languageBtn=document.getElementsByClassName('head-btn')
const languageDiv=Array.from(document.getElementsByClassName('language-div'))

for(let k=0;k<2;k++){
    languageBtn[k].addEventListener('click',()=>{
        languageDiv.forEach((item)=>item.classList.add('d-none'))
        languageDiv[k].classList.remove('d-none')
        for(let l=0;l<2;l++){
            languageBtn[l].classList.remove('active')
        }
        languageBtn[k].classList.add('active')
    })
        
    
}
//add functionality in the family section butttons
const familyBtn=document.getElementsByClassName('family-btn')
const familyDiv=Array.from(document.getElementsByClassName('family-div'))

for(let k=0;k<2;k++){
    familyBtn[k].addEventListener('click',()=>{
        familyDiv.forEach((item)=>item.classList.add('d-none'))
        familyDiv[k].classList.remove('d-none')
        for(let l=0;l<2;l++){
            familyBtn[l].classList.remove('show')
        }
        familyBtn[k].classList.add('show')
    })
        
    
}





})


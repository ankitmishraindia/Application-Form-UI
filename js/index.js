// Give functionality to sidebar is small screen to toggle by menu icon
const sidebar=document.getElementById('sidebar');
const menu=document.getElementById('menu')

menu.addEventListener('click',()=>{
    sidebar.classList.remove('d-none')
    sidebar.classList.remove('w-25')
    sidebar.classList.add('w-50')
    
})

//give functionality to close button
const close=document.getElementById('close')

close.addEventListener('click',()=>{
   sidebar.classList.add('d-none')
   sidebar.classList.add('w-25')
   sidebar.classList.remove('w-50')
})


// Image uploading preview
function previewImage(event){
    let input=event.target;
    let preview=document.getElementById('preview')
    let file=input.files[0]

    if(file){
        let reader=new FileReader()
        reader.onload=function(){
            preview.src=reader.result;
        }
        reader.readAsDataURL(file)
    }
}

//set value of present address to permanent address by checkbox
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
        
    }else{
        visaBox[0].classList.add('d-none')
        visaBox[1].classList.add('d-none')
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
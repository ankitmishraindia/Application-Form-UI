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


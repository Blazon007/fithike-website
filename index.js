
const formE1=document.querySelector('.form');
    formE1.addEventListener('submit',()=>{
       event.preventDefault();
       const formData=new FormData(formE1); 
       const data=Object.fromEntries(formData)
       console.log(data);
       console.log(data['name']);

       

       
       
      
       


    });

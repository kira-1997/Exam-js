

let signUp =document.getElementById('signin')
signUp.addEventListener('click',()=>{
let nickName=document.getElementById('nickName').value
let password=document.getElementById('password').value
let mssg=document.getElementById('mssg')

if(nickName=="" ||  password==""){
    mssg.innerHTML='Input is empty'
}
else{
  fetch('https://65524db75c69a7790329dc3e.mockapi.io/users')
  .then((response) => response.json())
  .then((data) => {
  
     let validUser=data.find((d)=>
        d.nickName==nickName && d.password==password     
      )

   if(!validUser){
    mssg.innerHTML='you dont exist'
   }
   else{
    window.open("index.html")
    
   }});

}});
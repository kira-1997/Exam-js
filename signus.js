
let signUp =document.getElementById('signUp')
signUp.addEventListener('click',()=>{
let userName=document.getElementById('userName').value
let nickName=document.getElementById('nickName').value
let email=document.getElementById('email').value
let password=document.getElementById('password').value
let mssg=document.getElementById('mssg')

const regexName = /^[a-zA-Z]{3,}$/
const regexEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const regexPassword=/^[0-9]{4,}$/
const regexNickName=/^(?=.*[A-Z])[a-zA-Z]{3,}$/

if(userName=="" || nickName=="" || email=="" || password==""){
    mssg.innerHTML='Input is empty'
}
else if(!regexName.test(userName)){
    mssg.innerHTML="invaild Name. Please letters only and more than 3 letters"

}
else if(!regexNickName.test(nickName)){
    mssg.innerHTML="invaild user name. Please letters only and more than 3 letters. at least one cap"
}
else if(!regexEmail.test(email)){
    mssg.innerHTML="invalid email"
}
else if(!regexPassword.test(password)){
    mssg.innerHTML="invaild password. Please numbers only and more than 4 numbers."
}


else{
fetch('https://65524db75c69a7790329dc3e.mockapi.io/users', {
  method: 'POST',
  body: JSON.stringify({
    userName,
    nickName,
    email,
    password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
   localStorage.setItem('name',userName)
   window.open('signIn.html')

}
})


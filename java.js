let signOut=document.getElementById('signOut')
signOut.addEventListener('click',()=>{
    localStorage.clear()
})

if(!localStorage){

    window.open('signUp.html')
    exit()

}

let userName=document.getElementById('userName')
userName.innerHTML='Welcome '+localStorage.getItem(userName)

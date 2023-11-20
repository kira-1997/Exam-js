let signOut=document.getElementById('signOut')
signOut.addEventListener('click',()=>{
    localStorage.clear()
})

if(localStorage.getItem('name')==''){

    window.open('signIn.html')
    exit()

}

let userName=document.getElementById('userName')
userName.innerHTML='Welcome '+localStorage.getItem(userName)

let city=document.getElementById('city')
let temp=document.getElementById('temp')
let humdity=document.getElementById('humdity')
let h=document.getElementById('h')
let w=document.getElementById('w')

let key='56f59d26f82af4ee81cbc6068dc9100d'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=${key}`)
  .then((response) => response.json())
  .then((json) =>
  {
    console.log(json)
    city.innerHTML=json.name
    temp.innerHTML='Tempretaure: '+json.main.temp
    humdity.innerHTML='Humidity: '+json.main.humidity
    h.innerHTML='Latitude: '+json.coord.lat
    w.innerHTML='Longitude: '+json.coord.lon
}
  
  );
let signOut=document.getElementById('signOut')
signOut.addEventListener('click',()=>{
    localStorage.clear()
})

if(localStorage.getItem('name')==''){

    window.open('signIn.html')
    exit()

}

let userName=document.getElementById('userName')
userName.innerHTML='Welcome '+localStorage.getItem("name")
let day=document.getElementById('day')
let date=document.getElementById('date')
let prayerTime=document.getElementById('prayerTime')
let btnHJ=document.getElementById('Hj')
let btnG=document.getElementById('G')

fetch('https://api.aladhan.com/v1/calendar/2023/11?latitude= 24.755562&longitude=46.589584&method=2')
  .then((response) => response.json())
  .then((json) =>
      {      
     
        console.log(json.data[19])
       day.innerHTML=json.data[19].date.gregorian.weekday.en
        prayerTime.innerHTML=printObj(json.data[19].timings);
       btnG.addEventListener('click',()=>{
        date.innerHTML=json.data[19].date.gregorian.date
        })
       btnHJ.addEventListener('click',()=>{
         date.innerHTML=json.data[19].date.hijri.date
            })
       
  
    });
  


    let printObj = function (obj) {
        let string = '';
     
        for (let prop in obj) {
            if (typeof obj[prop] == 'string') {
                string += prop + ': ' + obj[prop] + '. \n';
            }
            else {
                string += prop + ': { \n' + print(obj[prop]) + '}';
            }
        }
     
        return string;
    }
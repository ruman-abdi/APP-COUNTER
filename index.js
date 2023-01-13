const incrementbtn= document.getElementById('increment-btn')
const counterEl = document.getElementById('count-el')
const saveEl = document.getElementById('save-el')

let count = localStorage.getItem('count')
function increment(){
    
       counterEl.textContent = count += 1

    }

increment()


function Save(){
let countStr =  count +  " - "
saveEl.textContent += countStr
localStorage.setItem('count', count)  
counterEl.textContent = 0;
count = 0

}
Save()
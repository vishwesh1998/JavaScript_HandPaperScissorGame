let div1 = document.getElementById('2')
localStorage.setItem('div1', div1.outerHTML)
let div2 = document.getElementById('1')
localStorage.setItem('div2', div2.outerHTML)
let div3 = document.getElementById('0')
localStorage.setItem('div3', div3.outerHTML)

let computeIcon = Math.floor(Math.random() * 3);
console.log(computeIcon)

document.getElementById('rules').addEventListener('click', ()=>{
    document.getElementById('rightMain').classList.toggle('rightMainRules')
})

document.getElementById('x').addEventListener('click', ()=>{
    document.getElementById('rightMain').classList.add('rightMainRules')
})

let icon = document.getElementsByClassName('gameIcon')
let result = ''
console.log(icon)
for(let x of icon){
    x.addEventListener('click', ()=>{
        localStorage.removeItem('value')
        if(x.id==2 && computeIcon==2 )
        result = 'Game Tie';
        else if(x.id==2 && computeIcon==1)
        result = 'You Win';
        else if(x.id==2 && computeIcon==0)
        result = 'PC Win';
        else if(x.id==1 && computeIcon==2)
        result = 'PC Win';
        else if(x.id==1 && computeIcon==1)
        result = 'Game Tie';
        else if(x.id==1 && computeIcon==0)
        result = 'You Win';
        else if(x.id==0 && computeIcon==2)
        result = 'You Win';
        else if(x.id==0 && computeIcon==1)
        result = 'PC Win';
        else if(x.id==0 && computeIcon==0)
        result = 'Game Tie';
        localStorage.setItem('value', JSON.stringify({user:x.id, computer:computeIcon, msg:result}))
        sessionStorage.removeItem('loadingValue', 'true')
    })
}

document.getElementById('userScore').innerText = localStorage.getItem('uscore')
document.getElementById('comScore').innerText = localStorage.getItem('cscore')

document.getElementById('reset').addEventListener('click', ()=>{
    localStorage.removeItem('uscore')
    localStorage.removeItem('cscore')
})
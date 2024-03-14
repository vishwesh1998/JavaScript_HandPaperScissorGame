let recentClick = JSON.parse(localStorage.getItem('value'))
let getDiv1 = localStorage.getItem('div1')
let getDiv2 = localStorage.getItem('div2')
let getDiv3 = localStorage.getItem('div3')
        if(recentClick.user == 2)
        {
            document.getElementById('userValue').innerHTML = getDiv1
        }
        else if(recentClick.user == 1){
            document.getElementById('userValue').innerHTML = getDiv2
        }
        else{
            document.getElementById('userValue').innerHTML = getDiv3
        }

        if(recentClick.computer == 2)
        {
            document.getElementById('comValue').innerHTML = getDiv1
        }
        else if(recentClick.computer == 1){
            document.getElementById('comValue').innerHTML = getDiv2
        }
        else{
            document.getElementById('comValue').innerHTML = getDiv3
        }

        document.getElementById('rules').addEventListener('click', ()=>{
            document.getElementById('rightMain').classList.toggle('rightMainRules')
        })
        
        document.getElementById('x').addEventListener('click', ()=>{
            document.getElementById('rightMain').classList.add('rightMainRules')
        })
        
        let uScore = 0
        let cScore = 0 
        document.getElementById('resultD').innerText = recentClick.msg
        if(recentClick.msg === 'You Win'){
            console.log('running')
            document.getElementById('userValue').classList.add('cValue')
            document.getElementById('outerDiv').classList.add('outerDiv')
            document.getElementById('outerDiv1').classList.add('outerDiv1')
            if(!sessionStorage.getItem('loadingValue')){
            uScore = localStorage.getItem('uscore')*1 + 1;
            localStorage.setItem('uscore', uScore)
            }
            document.getElementById('next').classList.remove('next1')
        }
        else if(recentClick.msg === 'PC Win'){
            document.getElementById('comValue').classList.add('cValue')
            document.getElementById('outerDiv3').classList.add('outerDiv')
            document.getElementById('outerDiv2').classList.add('outerDiv1')     
            if(!sessionStorage.getItem('loadingValue')){
            cScore = localStorage.getItem('cscore')*1 + 1;
            localStorage.setItem('cscore', cScore)
        }
            document.getElementById('next').classList.add('next1')
        }
        else{
            document.getElementById('next').classList.add('next1')
        }
        sessionStorage.setItem('loadingValue', 'true')
        document.getElementById('userScore').innerText = localStorage.getItem('uscore')
        document.getElementById('comScore').innerText = localStorage.getItem('cscore')

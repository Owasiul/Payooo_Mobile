// home js

// add money
const requardPin = 1234;
document.getElementById("addMoneyBtn").addEventListener('click', (event)=>{
     const bank = document.getElementById('bank').value
     const accountNum = document.getElementById('account-number').value
     const ammountNum = parseInt(document.getElementById('addAmmount').value)
     const pin = parseInt(document.getElementById('addPin').value)
     const balance = parseInt(document.getElementById('Balance').innerText)
     
     if(accountNum.length < 11){
        alert('Please give valid account Number')
        return;
     }
     else if(pin !== requardPin){
        alert('give valid pin')
        return;
     }

     let totalBalance = ammountNum + balance

     document.getElementById('Balance').innerText = totalBalance
})

// withdraw money
document.getElementById("withdrawMoneyBtn").addEventListener('click', (event)=>{
     const agent = document.getElementById('agent-number').value
     const ammount_Num = parseInt(document.getElementById('ammount').value)
     const pin = parseInt(document.getElementById('withdrawPin').value)
     const withdrawBalance = parseInt(document.getElementById('Balance').innerText)
     
     if(agent.length < 11){
        alert('Please give valid account Number')
        return;
     }
     else if(pin !== requardPin){
        alert('give valid pin')
        return;
     }

     let withdraw_Balance = withdrawBalance - ammount_Num

     document.getElementById('Balance').innerText = withdraw_Balance
})

// toggler
document.getElementById('add-money').addEventListener('click', (event) =>{
    document.getElementById('add-Money').style.display = 'block'
    document.getElementById('withdraw-Money').style.display = 'none'
})
document.getElementById('Cashout').addEventListener('click', (event) =>{
    document.getElementById('add-Money').style.display = 'none'
    document.getElementById('withdraw-Money').style.display = 'block'
})

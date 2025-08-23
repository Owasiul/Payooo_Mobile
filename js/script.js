// btn login
document.getElementById('login').addEventListener('click', (event) =>{
    event.preventDefault()
    const mobileNum = 1317491552
    const pinNum = 2005
    const mobileNumInput = document.getElementById('mobileNum').value
    const mobileNumConvert = parseInt(mobileNumInput)
    const pinNumInput = document.getElementById('pinNum').value
    const pinNumConvert = parseInt(pinNumInput)
    

    if(mobileNumConvert === mobileNum && pinNumConvert === pinNum){
        window.location.href = 'home.html'
    }
    else{
        console.log('failed')
    }
    
})
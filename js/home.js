// home js

// making a function for reuseable

// for inputs
function getInputs(id) {
  return parseInt(document.getElementById(id).value);
}
// for get innerText
function getInnerText(value) {
  return parseInt(document.getElementById(value).innerText);
}
// for set innerText
function setInnerText(value) {
  return (document.getElementById("Balance").innerText = value);
}

const requardPin = 1234;
// add money
document.getElementById("addMoneyBtn").addEventListener("click", (event) => {
  const bank = document.getElementById("bank").value;
  const accountNum = document.getElementById("account-number").value;
  const ammountNum = getInputs("addAmmount");
  const pin = getInputs("addPin");
  const balance = getInnerText("Balance");

  if (accountNum.length < 11) {
    alert("Please give valid account Number");
    return;
  } else if (pin !== requardPin) {
    alert("give valid pin");
    return;
  }

  let totalBalance = ammountNum + balance;

  setInnerText(totalBalance);
});

// withdraw money
document
  .getElementById("withdrawMoneyBtn")
  .addEventListener("click", (event) => {
    const agent = document.getElementById("agent-number").value;
    const withdrawAmmount_Num = getInputs("withdrawAmmount");
    const pin = getInputs("withdrawPin");
    const withdrawBalance = getInnerText("Balance");

    if (agent.length < 11) {
      alert("Please give valid account Number");
      return;
    } else if (pin !== requardPin) {
      alert("give valid pin");
      return;
    }

    let withdraw_Balance = withdrawBalance - withdrawAmmount_Num;

    setInnerText(withdraw_Balance);
  });

//Transer money
document
  .getElementById("transferMoneyBtn")
  .addEventListener("click", (event) => {
    const user = document.getElementById("user-number").value;
    const transferAmmount = getInputs("transfer-ammount");
    const pin = getInputs("transferPin");
    const transferBalance = parseInt(
      document.getElementById("Balance").innerText
    );

    if (user.length < 11) {
      alert("Please give valid account Number");
      return;
    } else if (pin !== requardPin) {
      alert("give valid pin");
      return;
    }

    let transfer_Balance = transferBalance - transferAmmount;

    setInnerText(transfer_Balance);
  });

//coupon
document
.getElementById("couponMoneyBtn")
  .addEventListener("click", (event) => {  
  });

// pay bill
document
  .getElementById("payBillBtn")
  .addEventListener("click", (event) => {
    const bill = document.getElementById("bill").value;
    const billNum  = document.getElementById("biller-number").value;
    const ammountToPay = getInputs("payingAmmount");
    const pin = getInputs("billerPin");
    const bilBalance = getInnerText("Balance");

    if (billNum.length < 11) {
      alert("Please give valid account Number");
      return;
    } else if (pin !== requardPin) {
      alert("give valid pin");
      return;
    }

    let billAfterBalance = bilBalance - ammountToPay;

    setInnerText(billAfterBalance);
  });

  


// toggler
function displayNoneToggle(id) {
  return (document.getElementById(id).style.display = "none");
}

function addActiveClass(style){
   const activeToggle = document.getElementsByClassName('box')
   for(const btnToggler of activeToggle){
      btnToggler.classList.remove("bg-[#0478fc0d]", "border-[#0478fc]")
      btnToggler.classList.add("border-gray-400")
   }
   document.getElementById(style).classList.remove("border-gray-400")
   document.getElementById(style).classList.add("bg-[#0478fc0d]", "border-[#0478fc]")
}
// add money toggler
document.getElementById("add-money").addEventListener("click", (event) => {
  document.getElementById("add-Money").style.display = "block";
  displayNoneToggle("withdraw-Money", "transfer-Money");
  addActiveClass('add-money')
});
// cashout toggler
document.getElementById("Cashout").addEventListener("click", (event) => {
  document.getElementById("withdraw-Money").style.display = "block";
  displayNoneToggle("add-Money", "transfer-Money");
  addActiveClass('Cashout')
});
// transfer money toggler
document.getElementById("money-Transfer").addEventListener("click", (event) => {
  document.getElementById("transfer-Money").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  addActiveClass('money-Transfer')
});
// coupon toggler
document.getElementById("getBonusMoney").addEventListener("click", (event) => {
  document.getElementById("bonus-Money").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  addActiveClass('getBonusMoney')
});
// pay bill toggler
document.getElementById("payBill").addEventListener("click", (event) => {
  document.getElementById("billPay").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  addActiveClass('payBill')
});


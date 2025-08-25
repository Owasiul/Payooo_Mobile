// home js
const requardPin = 1234;
const transationData = [];

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

// transiction History
function transation_Data(ids) {
  const data = {
    name: ids,
    date: new Date().toLocaleTimeString(),
  };
  return transationData.push(data);
}


// events of btns
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

//Transfer money
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
  .addEventListener("click", (event) => {});

// pay bill
document.getElementById("payBillBtn").addEventListener("click", (event) => {
  const bill = document.getElementById("bill").value;
  const billNum = document.getElementById("biller-number").value;
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

// transiction
document
  .getElementById("transactionBtn")
  .addEventListener("click", (event) => {
   
  });

// toggler
function displayNoneToggle(id) {
  return (document.getElementById(id).style.display = "none");
}

function addActiveClass(style) {
  const activeToggle = document.getElementsByClassName("box");
  for (const btnToggler of activeToggle) {
    btnToggler.classList.remove("bg-[#0478fc0d]", "border-[#0478fc]");
    btnToggler.classList.add("border-gray-400");
  }
  document.getElementById(style).classList.remove("border-gray-400");
  document
    .getElementById(style)
    .classList.add("bg-[#0478fc0d]", "border-[#0478fc]");
}

// add money toggler
document.getElementById("add-money").addEventListener("click", (event) => {
  document.getElementById("add-Money").style.display = "block";
  displayNoneToggle(
    "withdraw-Money",
    "transfer-Money",
    "bonus-Money",
    "billPay",
    "transiction"
  );
  addActiveClass("add-money");
  transation_Data("add-money");
});
// cashout toggler
document.getElementById("Cashout").addEventListener("click", (event) => {
  document.getElementById("withdraw-Money").style.display = "block";

  displayNoneToggle("add-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  addActiveClass("payBill");
  addActiveClass("transiction");

  addActiveClass("Cashout");
  transation_Data("Cashout");
});
// transfer money toggler
document.getElementById("money-Transfer").addEventListener("click", (event) => {
  document.getElementById("transfer-Money").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transiction");
  displayNoneToggle("bonus-Money");
  addActiveClass("payBill");

  addActiveClass("money-Transfer");
  transation_Data("money-Transfer");
});
// coupon toggler
document.getElementById("getBonusMoney").addEventListener("click", (event) => {
  document.getElementById("bonus-Money").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("transiction");
  addActiveClass('payBill')

  addActiveClass("getBonusMoney");
  transation_Data("getBonusMoney");
});
// pay bill toggler
document.getElementById("payBill").addEventListener("click", (event) => {
  document.getElementById("billPay").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  addActiveClass("transiction")

  addActiveClass("payBill");
  transation_Data("payBill");
});
// transtiction
document.getElementById("transactionBtn").addEventListener("click", (event) => {
  document.getElementById("transiction").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  displayNoneToggle('billPay')

  addActiveClass("transactionBtn");
  transation_Data("transactionBtn");
});

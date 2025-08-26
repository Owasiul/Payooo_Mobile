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

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transationData.push(data);
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

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transationData.push(data);
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

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString(),
  };
  transationData.push(data);
});

// transiction
document.getElementById("transactionBtn").addEventListener("click", (event) => {
  const transactionContainer = document.getElementById("transaction_container");
  transactionContainer.innerText = "";
  for (const addData of transationData) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="wrp flex flex-row justify-between items-center mt-4">
            <div class="flex flex-row items-center">
              <div class="rounded-full bg-[#e1e2e3] p-3">
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div class="ml-4">
                <h1 class="font-bold text-[15px]">${addData.name}</h1>
                <p class="text-sm">${addData.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
    `;
    transactionContainer.appendChild(div);
  }
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
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  displayNoneToggle("billPay");
  displayNoneToggle("transiction");

  addActiveClass("add-money");
});
// cashout toggler
document.getElementById("Cashout").addEventListener("click", (event) => {
  document.getElementById("withdraw-Money").style.display = "block";

  displayNoneToggle("add-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  displayNoneToggle("billPay");
  displayNoneToggle("transiction");

  addActiveClass("Cashout");
});
// transfer money toggler
document.getElementById("money-Transfer").addEventListener("click", (event) => {
  document.getElementById("transfer-Money").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transiction");
  displayNoneToggle("bonus-Money");
  addActiveClass("billPay");

  addActiveClass("money-Transfer");
});
// coupon toggler
document.getElementById("getBonusMoney").addEventListener("click", (event) => {
  document.getElementById("bonus-Money").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("transiction");
  displayNoneToggle("billPay");

  addActiveClass("getBonusMoney");
});
// pay bill toggler
document.getElementById("payBill").addEventListener("click", (event) => {
  document.getElementById("billPay").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  displayNoneToggle("transiction");

  addActiveClass("payBill");
});
// transtiction
document.getElementById("transactionBtn").addEventListener("click", (event) => {
  document.getElementById("transiction").style.display = "block";
  displayNoneToggle("add-Money");
  displayNoneToggle("withdraw-Money");
  displayNoneToggle("transfer-Money");
  displayNoneToggle("bonus-Money");
  displayNoneToggle("billPay");

  addActiveClass("transactionBtn");
});

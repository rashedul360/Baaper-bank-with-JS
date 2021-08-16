function getInputValue(inputID) {
  const inputFieldText = document.getElementById(inputID);
  const PrevInputFieldValue = parseFloat(inputFieldText.value);
  //clear input field
  inputFieldText.value = "";
  return PrevInputFieldValue;
}

function updateValue(totalFiledID, PrevInputFieldValue) {
  const updateFieldText = document.getElementById(totalFiledID);
  const updateFieldValue = parseFloat(updateFieldText.innerText);
  updateFieldText.innerText = PrevInputFieldValue + updateFieldValue;
}

function getCurrentBalance() {
  const balanceUpdateText = document.getElementById("Balance-value");
  const balanceUpdateValue = parseFloat(balanceUpdateText.innerText);
  return balanceUpdateValue;
}
function updateBalance(PrevDepositInputFieldValue, isAdd) {
  const balanceUpdateText = document.getElementById("Balance-value");
  // const balanceUpdateValue = parseFloat(balanceUpdateText.innerText);
  const balanceUpdateValue = getCurrentBalance();
  if (isAdd === true) {
    const addedBalanced = balanceUpdateValue + PrevDepositInputFieldValue;
    balanceUpdateText.innerText = addedBalanced;
  } else {
    const addedBalanced = balanceUpdateValue - PrevDepositInputFieldValue;

    balanceUpdateText.innerText = addedBalanced;
  }
}

// cash deposit part
const depositBtn = document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //call getInputValue
    const PrevDepositInputFieldValue = getInputValue("deposit-input");
    if (PrevDepositInputFieldValue > 0) {
      //update deposit value
      updateValue("deposit-value", PrevDepositInputFieldValue);
      //update balance
      updateBalance(PrevDepositInputFieldValue, true);
      //warning part
      document.getElementById("confrim-dipo").innerText = "deposit successful";
      setTimeout(function () {
        document.getElementById("confrim-dipo").style.display = "none";
      }, 1000);
    }
    // else if (PrevDepositInputFieldValue < ) {
    //   console.log("dsfsd");
    // }
    else {
      document.getElementById("invalid1").innerText =
        "invalid please input a valid number";
      setTimeout(function () {
        document.getElementById("invalid1").style.display = "none";
      }, 1000);
    }
  });

// withDraw part

const withdrawBtn = document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //call getInputValue
    const PrevDepositInputFieldValue = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (
      PrevDepositInputFieldValue > 0 &&
      PrevDepositInputFieldValue <= currentBalance
    ) {
      //update withDraw value
      updateValue("withDraw-value", PrevDepositInputFieldValue);
      //update balance
      updateBalance(PrevDepositInputFieldValue, false);
      //warning part
      document.getElementById("withdraw-dipo").innerText =
        "withdraw successful";
      setTimeout(function () {
        document.getElementById("withdraw-dipo").style.display = "none";
      }, 1000);
    } else {
      document.getElementById("invalid2").innerText =
        "invalid please input a valid number";
      setTimeout(function () {
        document.getElementById("invalid2").style.display = "none";
      }, 1000);
    }
  });

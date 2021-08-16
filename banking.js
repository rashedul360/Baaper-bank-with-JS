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
function updateBalance(PrevDepositInputFieldValue, isAdd) {
  const balanceUpdateText = document.getElementById("Balance-value");
  const balanceUpdateValue = parseFloat(balanceUpdateText.innerText);
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
    //update deposit value
    updateValue("deposit-value", PrevDepositInputFieldValue);
    //update balance
    updateBalance(PrevDepositInputFieldValue, true);
    //warning part
    document.getElementById("confrim-dipo").innerText = "deposit successful";
    setTimeout(function () {
      document.getElementById("confrim-dipo").style.display = "none";
    }, 1000);
  });

// withDraw part

const withdrawBtn = document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //call getInputValue
    const PrevDepositInputFieldValue = getInputValue("withdraw-input");
    //update withDraw value
    updateValue("withDraw-value", PrevDepositInputFieldValue);
    //update balance
    updateBalance(PrevDepositInputFieldValue, false);
    //warning part
    document.getElementById("withdraw-dipo").innerText = "withdraw successful";
    setTimeout(function () {
      document.getElementById("withdraw-dipo").style.display = "none";
    }, 1000);
  });

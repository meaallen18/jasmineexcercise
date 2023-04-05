window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() { 
     const values = { amount: 10000, years: 30, rate: 10};
     
     userAmount = document.getElementById("loan-amount");
     userAmount.value = values.amount;
     
     const userYears = document.getElementById("loan-years");
     userYears.value = values.years;
  
     const userRate = document.getElementById("loan-rate");
     userRate.value = values.rate;
  
     update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const monthlyRate = values.rate / 100 / 12;
    const numPayments = values.years * 12;
    const numerator = values.amount * monthlyRate;
    const denominator = 1 - Math.pow(1 + monthlyRate, -numPayments);
    const monthlyPayment = numerator / denominator;
    return monthlyPayment.toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthlyPayment = document.getElementById("monthly-payment");
    monthlyPayment.innerText = "$" + monthly;
  }

  function appendDeleteBtn(tr) {
    const td = document.createElement("td");
    td.innerText = "X";
    td.style.cursor = "pointer";
    td.addEventListener("click", function() {
      const parentTr = td.parentNode;
      parentTr.parentNode.removeChild(parentTr);
    });
    tr.appendChild(td);
  }
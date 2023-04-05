
it('should calculate the monthly rate correctly', function () {
    // ...
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
  });
  
  /// etc
  
describe("calculateMonthlyPayment function", function() {
 it("should calculate the monthly rate correctly", function() {
      const values = { amount: 10000, years: 30, rate: 5 };
      const monthlyPayment = calculateMonthlyPayment(values);
      expect(monthlyPayment).toEqual("53.24");
    })
});
    
  
it("should return a result with 2 decimal places", function() {
        const values = { amount: 20000, years: 15, rate: 4.25 };
        const monthlyPayment = calculateMonthlyPayment(values);
        const decimalIndex = monthlyPayment.indexOf(".");
        expect(decimalIndex).not.toEqual(-1);
        const numDecimals = monthlyPayment.length - decimalIndex - 1;
        expect(numDecimals).toEqual(2);
    });

describe("appendDeleteBtn function", function() {
        let tr;
      
beforeEach(function() {
        tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.innerText = "Hello";
        td2.innerText = "Bye";
        tr.appendChild(td1);
        tr.appendChild(td2);
    });
      
it("should append a 'td' element with text 'X' to the input 'tr'", function() {
        appendDeleteBtn(tr);
        const td = tr.lastElementChild;
        expect(td.tagName).toEqual("TD");
        expect(td.innerText).toEqual("X");
    });
      
it("should remove the parent 'tr' element when the 'X' button is clicked", function() {
        const button = document.createElement("button");
        button.innerText = "X";
        tr.appendChild(button);
        appendDeleteBtn(tr);
        const td = tr.lastElementChild;
        td.click();
        expect(tr.parentNode).toBeNull();
    });
});
beforeEach(() => {
    allPayments = {
      payment1: { billAmt: '50', tipAmt: '10', tipPercent: 20 },
      payment2: { billAmt: '100', tipAmt: '20', tipPercent: 20 }
    };
  });

  it('should calculate the total sum of tip amounts', () => {
    const totalTip = sumPaymentTotal('tipAmt');
    expect(totalTip).toEqual(30);
  });

  it('should calculate the total sum of bill amounts', () => {
    const totalBill = sumPaymentTotal('billAmt');
    expect(totalBill).toEqual(150);
  });

  it('should calculate the total sum of tip percentages', () => {
    const totalTipPercent = sumPaymentTotal('tipPercent');
    expect(totalTipPercent).toEqual(40);
  });

  describe('calculateTipPercent', () => {
    it('should return the correct tip percentage for given bill and tip amounts', () => {
      const tipPercent1 = calculateTipPercent(100, 20);
      expect(tipPercent1).toEqual(20);
  
      const tipPercent2 = calculateTipPercent(50, 10);
      expect(tipPercent2).toEqual(20);
  
      const tipPercent3 = calculateTipPercent(80, 12);
      expect(tipPercent3).toEqual(15);
    });
  });

  describe('appendTd', () => {
    let tr;
  
    beforeEach(() => {
      tr = document.createElement('tr');
    });
  
    it('should append a new td element to the table row', () => {
      appendTd(tr, 'Test Value');
      const tds = tr.querySelectorAll('td');
  
      expect(tds.length).toEqual(1);
    });
  
    it('should set the correct text content for the new td element', () => {
      appendTd(tr, 'Test Value');
      const td = tr.querySelector('td');
  
      expect(td.textContent).toEqual('Test Value');
    });
  });
describe('submitPaymentInfo', () => {
    beforeEach(() => {
      paymentId = 0;
      allPayments = {};
    });
  
    it('should add a payment to allPayments object', () => {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
    });
  
    it('should not add a payment if billAmtInput or tipAmtInput is empty', () => {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should increase paymentId when adding a payment', () => {
      submitPaymentInfo();
      expect(paymentId).toEqual(1);
    });
  });
  
  describe('createCurPayment', () => {
    it('should create a curPayment object with the correct values', () => {
      billAmtInput.value = '100';
      tipAmtInput.value = '20';
  
      const curPayment = createCurPayment();
      expect(curPayment).toEqual({
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      });
    });
  
    it('should return undefined if billAmtInput or tipAmtInput is empty', () => {
      billAmtInput.value = '';
      tipAmtInput.value = '';
  
      const curPayment = createCurPayment();
      expect(curPayment).toBeUndefined();
    });
  
    it('should return undefined if billAmt is negative or zero', () => {
      billAmtInput.value = '-50';
      tipAmtInput.value = '10';
  
      const curPayment = createCurPayment();
      expect(curPayment).toBeUndefined();
    });
  });
  
  describe('appendPaymentTable', () => {
    beforeEach(() => {
      paymentId = 0;
      allPayments = {};
    });
  
    it('should add a payment row to the payment table', () => {
      const curPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      };
  
      appendPaymentTable(curPayment);
  
      const rows = paymentTbody.querySelectorAll('tr');
      expect(rows.length).toEqual(1);
    });
  
    it('should display the correct payment information in the table row', () => {
      const curPayment = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
      };
  
      appendPaymentTable(curPayment);
  
      const row = paymentTbody.querySelector('tr');
      expect(row.querySelectorAll('td')[0].textContent).toEqual('$100');
      expect(row.querySelectorAll('td')[1].textContent).toEqual('$20');
      expect(row.querySelectorAll('td')[2].textContent).toEqual('20%');
    });
  });
  
  describe('updateSummary', () => {
    beforeEach(() => {
      allPayments = {
        payment1: { billAmt: '50', tipAmt: '10', tipPercent: 20 },
        payment2: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
      };
    });
  
    it('should update the summary table with correct values', () => {
      updateSummary();
  
      expect(summaryTds[0].innerHTML).toEqual('$150');
      expect(summaryTds[1].innerHTML).toEqual('$30');
      expect(summaryTds[2].innerHTML).toEqual('20%');
    });
  });
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
  
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
  
    while (p !== null || q !== null) {
      let x = (p !== null) ? p.val : 0;
      let y = (q !== null) ? q.val : 0;
  
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
  
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  // Example usage:
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  
  const result = addTwoNumbers(l1, l2);
  console.log(result);
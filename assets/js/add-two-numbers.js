function addNumbers() {
  const l1Input = document.getElementById('l1').value;
  const l2Input = document.getElementById('l2').value;

  const l1 = l1Input.split(',').map(Number).reverse();
  const l2 = l2Input.split(',').map(Number).reverse();

  let carry = 0;
  let result = [];

  for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
    const sum = (l1[i] || 0) + (l2[i] || 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result.push(carry);
  }

  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
}

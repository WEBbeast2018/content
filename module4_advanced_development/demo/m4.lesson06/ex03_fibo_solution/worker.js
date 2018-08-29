onmessage = (msg) => {
  console.log('self', self);
  console.log('message from main', msg);
  const result = fibonacci(msg.data);
  postMessage(result);
};

// get the N number in fibonacci series
function fibonacci(num) {
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}
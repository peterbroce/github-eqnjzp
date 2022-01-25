import css from './css/com.css';
let a = 0,
  b = 1;
let c = a + b;
console.log(c);
window.onload = function () {
  let testdom = document.getElementById('test');
  let first = document.createElement('div');
  let second = document.createElement('div');
  let three = document.createElement('div');
  first.className = 'first';
  second.className = 'second';
  three.className = 'three';
  testdom.appendChild(first);
  first.appendChild(second);
  first.appendChild(three);

  let p = document.createElement('p');
  p.innerHTML = `<p>${c}</p>`;
  testdom.appendChild(p);
  // let arr = ['first', 'second', 'three'];
  // arr.forEach((e, i) => {
  //   e = document.createElement('div');
  //   e.className = arr[i];
  //   dcument.getElementById('test').appendChild(e);
  // });
};
console.log('');

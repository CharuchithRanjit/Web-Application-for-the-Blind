var x = document.getElementsByClassName("header_title");
let a = [1,2,3,4,5];
function speak() {
  x.innerHTML = "Hello";
}
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('mouseover', speak);
}
// console.log(z);
// console.log(a);
// console.log(y);
// console.log("HELLO WORLD!")
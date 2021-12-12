//  Scope kavramı

// Global Scope

// function a(){
//     // Function Scope
// }

// if(){
//     // Block Scope
// }

// Global Scope

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func() {
//   var value1 = 40;
//   let value2 = 50;
//   const value3 = 60;
//   console.log(value1, value2, value3);
// }
// Func();

// const ta bir daha atama yapamıyoruz

// console.log(value1, value2, value3);

// burada şunu gördük function scope sadece içerde dışarıyı değiştirmez.

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//     console.log(a, b, c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// burada var ile let ve const arasındaki farkı anlamış olduk. var if bloku dışında çalıştı fakat let ve const çalışmadı hata verdi.

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// if (true) {
//   var value1 = 40;
//   let value2 = 50;
//   const value3 = 60;
//   console.log(value1, value2, value3);
// }

// console.log(value1, value2, value3);

// DOM

// console.log(this);
// console.log(this.document);
// console.log(document); // windows objesi içinde olduğu için direkt çağırabiliriz.

// let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length - 1];

// console.log(value);

// const elements = document.all;
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// elements.forEach(function (element) {
//   // hata verdi direkt forEach kullanılmaz
//   console.log(element);
// });

// fakat arraye çevirirsek forEach kullanabiliriz.

// Fonksiyonlar

// function merhaba() {
//   console.log("merhaba");
// }

// merhaba(); //  Fonksiyon çağrısı (function Call)
// merhaba();

// function merhaba(name, age) {
//   console.log(`isim ${name} Yaş: ${age}`);
// }

// merhaba("kamil", 35); //  Fonksiyon çağrısı (function Call)

// eğer hiçbirşey girilmezse bu şekilde yapabiliriz
// function merhaba(name, age) {
//   if (typeof name === "undefined") name = "bilgi yok";
//   if (typeof age === "undefined") age = "bilgi yok";
//   console.log(`isim : ${name} Yaş: ${age}`);
// }

// // 2.yol eğer hiçbirşey girilmezse bu şekilde yapabiliriz
// function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`isim : ${name} Yaş: ${age}`);
// }

// // merhaba("kamil", 35); //  Fonksiyon çağrısı (function Call)
// merhaba();
// merhaba("kamil");

// return

// function square1(x) {
//   console.log(x * x);
// }
// function cube(x) {
//   console.log(x * x * x);
// }
// let a = square1(12);
// a = cube(a);

// function square1(x) {
//   return x * x;
// }
// function cube(x) {
//   return x * x * x;
// }
// let a = square1(12);
// a = cube(a);
// console.log(a); // değer dönmesi için return kullandık

// daha kısa yazmak için

// function square1(x) {
//   return x * x;
// }
// function cube(x) {
//   return x * x * x;
// }
// let a = cube(square1(12));
// console.log(a);

// return bir anlamıda fonksiyonu sonlandıran bir yapıdır.

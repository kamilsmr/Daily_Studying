// while döngüsü

// let i = 0;

// while (i < 10) {
//   // sonsuz döngü
//   console.log(i);

//   i += 1; // i++
// }

// let i = 0;

// while (i > 0) {
//   console.log(i);

//   // i -= 1 // i--

//   i -= 2;
// }

// Break ve Countinue Kavramları

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }

// let i = 0;

// while (i < 10) {
//   // sonsuz döngü
//   if (i == 3 || i == 5) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 0;

// while (i < 10) {
//   if (i == 3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 0; // çok fazla kullanılmamaktadır.

// do {
//     console.log(i);
//     i++;

// } while(i<10);

// const langs = ["python", "javascript", "java"];
// let index = 0;
// while (index < langs.length) {
//   console.log(langs[index]);

//   index++;
// }

// const langs = ["python", "javascript", "java"];
// for (let index = 0; index < langs.length; index++) {
//   console.log(langs[index]);
// }

// const langs = ["python", "javascript", "java"];

// langs.forEach(function (lang) {
//   console.log(lang);
// });

// const langs = ["python", "javascript", "java"];

// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

// const users = [
//   { name: "Mustafa", age: 25 },
//   { name: "Zeynep", age: 40 },
//   { name: "Ali", age: 12 },
// ];

// const names = users.map(function (user) {
//   return user.name;
// });

// const ages = users.map(function (user) {
//   return user.age;
// });

// console.log(names);
// console.log(ages);

// const user = {
//   name: "mustafa",
//   age: 25,
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

// windows

// alert("merhaba");

// console.log(this);
// console.log(this.alert("merhaba"));
// console.log(window);

// const cevap = confirm("Emin misiniz?");

// console.log(cevap);

// if (cevap) {
//   console.log("Silin Gitsin");
// } else {
//   console.log("Silmeyin");
// }

// const cevap = confirm("Emin misiniz?");

// console.log(cevap);

// if (confirm("Emin misiniz?")) {
//   console.log("Silin Gitsin");
// } else {
//   console.log("Silmeyin");
// }

// const cevap = prompt("2+2 = ?");

// console.log(cevap);
// console.log(typeof cevap);

// if (cevap == "4") {
//   console.log("Doğru");
// } else {
//   console.log("yanlış");
// }

// let value;

// value = window;
// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;

// // window.location.reload();

// if (confirm("Sayfa yenilensin mi?")) {
//   window.location.reload();
// } else {
//   console.log("sayfa yenilenemedi");
// }
// console.log(value);

// value = window.outerHeight;
// value = winow.outerWeight;

// value = window.innerHeight;
// value = window.innerWidth;

// value = window.scrollX;
// value = window.scrollY;
// console.log(value);

// const body = document.body
// body e direkt ekleme
// body.append("hello world", " Bye")

// normalde oluşturduğumuzda direkt eklemiyor
// const div = document.createElement("div");
// div.textContent = "hello world2"

// eklemek için append kullanmamız gerekir.
// body.append(div);

// güzel bir örnek

// const div = document.querySelector("div");

// console.log(div.textContent); // çıktısı ayrı satırda
// console.log(div.innerText); // çıktısı aynı satırda

// güzel örnek

// const body = document.body
// const div = document.createElement("div");

// div.textContent = "hello world2"
// div.textContent = "<strong>hello world2</strong>" // ÇIKTISI <strong>hello world2</strong>

// div.innerHTML = "<strong>hello world2</strong>" // ÇIKTISI farklı
// body.append(div);

// şu şekilde de olabilir

// const body = document.body
// const div = document.createElement("div");
// const strong = document.createElement("strong");
// strong.innerText = "hello world 2";
// div.append(strong);

// body.append(div);

// const body = document.body;
// const div = document.querySelector("div");
// const spanHi = document.querySelector("#hi");
// const spanBye = document.querySelector("#bye");

// silmekiçin remove()

// spanBye.remove();
// eklemek için append()

// div.append(spanBye);

// div.remove(spanHi); // silme yöntemi 1
// div.removeChild(spanHi) // silme 2. yöntem

// get attribute ile çağırma

// const body = document.body;
// const div = document.querySelector("div");
// const spanHi = document.querySelector("#hi");
// const spanBye = document.querySelector("#bye");

// console.log(spanHi.getAttribute("id"));
// console.log(spanHi.getAttribute("title"));
// console.log(spanHi.title);

// attribute değiştirmek için

// console.log(spanHi.setAttribute("title", "aksdkasda"));

// silmek için

// spanHi.removeAttribute("id");

// class eklemek için

// spanHi.classList.add("new-class");
// spanHi.classList.remove("h1");

// spanHi.style.color = "red";
// spanHi.style.backgroundColor = "red";









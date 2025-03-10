
let body = document.querySelector("body");

let heading = document.createElement("h1");
heading.innerText = "DOM Manipulation";
body.append(heading);

let p = document.createElement("p");
p.innerText = "Hey! I am red..." ;
p.style.color = "red";
body.insertAdjacentElement("afterbegin",p);

let h3 = document.createElement("h3");
h3.innerText = "Hey! I am blue h3";
h3.style.color = "blue";
p.insertAdjacentElement("afterend",h3);

let div = document.createElement("div");
div.classList.add("box");
h3.insertAdjacentElement("afterend",div);

let h1 = document.createElement("h1");
h1.innerText = "I am in div" ;
div.appendChild(h1);

let para = document.createElement("p");
para.innerText = "Me too!";
div.appendChild(para);


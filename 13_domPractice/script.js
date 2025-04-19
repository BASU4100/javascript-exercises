const container = document.querySelector("#container");

const para =  document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

const thirdHeader = document.createElement("h1");
thirdHeader.style.color = "blue";
thirdHeader.textContent = "I'm a blue h3!";

container.appendChild(thirdHeader);

const div = document.createElement("div");
div.setAttribute("style", "border: solid black; background: pink");

const firstHeader = document.createElement("h1");
firstHeader.textContent = "I'm in a div";

div.appendChild(firstHeader);

const divPara = document.createElement("div");
divPara.textContent = "ME TOO!";

div.appendChild(divPara);

container.appendChild(div);
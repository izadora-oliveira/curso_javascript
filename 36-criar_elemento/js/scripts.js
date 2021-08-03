// inserir o elemento no body

var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

var texto = document.createTextNode("Este é o conteúdo do paragráfo");
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

var body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrafo);

// inserir 

var conteiner = document.getElementById("conteiner");
console.log(conteiner);

var el =document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));

console.log(el);

conteiner.appendChild(el);

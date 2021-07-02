// selecionar elemento

var title = document.querySelector('#title');
console.log(title);

// innerHTMl
title.innerHTML = "testando o texto alterado";

console.log(title);


// textcontent -> mais utilizado, recomendado 
var subtitle = document.querySelector(".subtitle");

console.log(subtitle);

subtitle.textContent = "testando o textcontent";

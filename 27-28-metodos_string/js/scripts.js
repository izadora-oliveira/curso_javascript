// length

var nome = "izadora";
console.log(nome.length);

var obj = "computador";

console.log(obj.length);

// indexOf

console.log(nome[2]);
var frase = "o rato roeu a roupa do rei de roma";
console.log(frase.indexOf("roeu"));

//slice

var roeu = frase.slice(7,11);
console.log(roeu);

// replace

var novafrase = frase.replace("roeu","teste");

console.log(novafrase);

// toLowerCase e toUpperCase

var frase = "frase de manipulação";
var fraseCaixaAlta = frase.toLocaleUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLocaleLowerCase());

//trim

var nome = "          izadora           ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, javascript, html, css";

console.log(tags.split(", "));

//lastIndexOf

var frasedois = "eu quero a ultima palavra teste frase";
console.log(frasedois.indexOf("teste"));
console.log(frasedois.lastIndexOf("teste"));






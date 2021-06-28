var teste = 5;


console.log(this);
console.log(this.teste);
console.log(teste);



// alert('olá');
// this.alert('hello');

let pessoa = {
    nome: "izadora",
    idade: 29,
    falar: function(){
        console.log("olá, tudo bem?");
    },
    dizerNome: function(){
        console.log("o meu nome é " + this.nome);

    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'sr. ' + this.nome;
    }
}

pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade);
console.log(pessoa.saudacao());

var sdc = pessoa.saudacao();

console.log(sdc);










//Aritméticos

let salario = 100
console.log(salario+salario)
console.log(salario*salario)
console.log(salario-salario)
console.log(salario/salario)
console.log(5**5)

let idade = 18
console.log(++idade)

//Atribuição
let valorMouseGamer = 100
console.log(valorMouseGamer)

//valorMouseGamer = valorMouseGamer + valorMouseGamer
valorMouseGamer += valorMouseGamer
console.log(valorMouseGamer)


//Comparação
//Igualdade estrita
console.log (1 === 1)

//Igualdade solta
console.log (1 == 1);
console.log ('1' == 1)

//Operador Ternário
//Tem um cliente, mais que 100 pontos, cliente premium, comum
let pontos = 150;
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

//Lógicos
// Operador Lógico e (&&)
//retorna TRUE se os dois operandos forem true
console.log(true && true);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

console.log(podeAplicar)


//Operador Lógico ou(||)
//Retorna true se um dos operandos forem true

let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2

console.log('pode aplicar: ', podeAplicar2)

//Operador NOT (!)
let candidatoRecusado = !podeAplicar2;
let final = !podeAplicar2 === true ? console.log('Candidato Recusado') : console.log('Candidato Aprovado') 

//Bitwise


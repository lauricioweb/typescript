// ao declara um variavel com um valor usando let voce atribui a esta varival o tipo do seu valor
let nome = "lauricio"; // tipo string

//nome = 33; nao podera ser atribuido a variavel um valor de outro tipo

//ao declarar um valor a uma variavel usando const esse valor sera literalmente seu tipo nao podendo ser alterado
const idade = 33; // tipo = 33
// const idade:33 = 33

// inferindo tipo literal a um objeto
const pessoa = {
  nome: "Lau" as const, //dessa forma o tipo da variavel é literalmente "Lau"
  idade:33
}

pessoa.nome = "Lau";

// passando tipos literais com enum
function escolhaCor(cor: "azul" | "verde" | "cinza"){
  return cor;
}

console.log(escolhaCor("verde"));

export default nome;
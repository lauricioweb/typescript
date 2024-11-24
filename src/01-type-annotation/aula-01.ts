// type anotation trata se de atribuir tipos para uma variavel

//tipos basicos 
let nome: string = "lauricio";
let idade: number = 33;
let adulto: boolean = true;
let simbolo: symbol = Symbol("qualquer simbolo aqui");


//tipando array
let arrayOfNumbers: Array<number> = [1,2,3,4];
let arrayOfNumbers2: number[] = [1,2,3,4]; // outra forma de represantar um array de numeros
let arrayOfStrings: Array<string> = ["lauricio","de", "sousa"];

//tipando objeto

let pessoa: {nome:string, idade:number, email?:string} = {
  nome:"lauricio",
  idade:32,
  email:"deve@gmail.com"
}

// tipando funções 

function soma(x:number,y:number){
  return x + y;
}

const soma2: (x:number, y:number) => number = (x, y) => x + y;
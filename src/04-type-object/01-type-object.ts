const objectA: {
	chaveA: string;
	chaveB: string;
  [key: string]: unknown; // index signature pra poder adicionar qualquer chave no objeto depois de criado
} = {
	chaveA: "Valor A",
	chaveB: "Valor B"
}


objectA.chaveF = "teste";
objectA.chaveB = "teste 2";


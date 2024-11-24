// funções voids nao retornam nada

function  notReturn(...args: string[]): void{
   console.log(args.join(" "));
}

notReturn("lauricio", "teste", "ytestesss");

const pessoa = {
   nome: "lauricio",
   sobrenome: "de sousa",
   exibirNome():void{
      console.log(this.nome + " " + this.sobrenome)
}
}

export { pessoa }

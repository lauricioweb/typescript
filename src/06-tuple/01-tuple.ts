const dadosCliente: [number, string] = [33, "lauricio"];
const dadosCliente2: [number, string, string?] = [33, "lauricio"]; // ultimo parametro é opcional

dadosCliente[0] = 44;
dadosCliente[1] = "mestre";
dadosCliente.pop(); // alterando array de forma inlicita
// para evitar esse tipo de comportamento o array criado deve ser readonly


// podemos tamber criar arrays imultaveis
const array01: readonly string[] = ["lauriucio"];
const array02: ReadonlyArray<string> = ["mestre de devs"];

console.log(dadosCliente);
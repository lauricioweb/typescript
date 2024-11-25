//arrays


function multiArr(...args: Array<number>): number{
	return args.reduce((ac, valor) => ac * valor, 1);
} 

function concatString(...args: string[]): string {
	return args.reduce((ac, valor) => ac + valor)
}


function stringToUpper(...args: string[]): string[] {
	return args.map((valor) => valor.toUpperCase());
}


const res = multiArr(1,2,3,4,5,6);
const resStr = concatString("lauri","cio");
const resUpper = stringToUpper("lauri","cio");


console.log(res);
console.log(resStr);
console.log(resUpper);


// tipo unknow pode ser atribuido qualquer valor porem o type script ira barrar caso haja alguma incompatibilidade
// diferente do any que sera permitido atribuir qualquer valor sem nenhuma interferencia so typescript

let x: unknown;

x = "10"

let y = 99;

//console.log(x + y);

// o typescript iforma que devera ser feito uma checagem no tipo antes de fazer qualquer operação 

if(typeof x == "number") console.log(x + y);
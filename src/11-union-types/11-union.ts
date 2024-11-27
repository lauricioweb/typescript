function addConcat(a: number | string, b: number | string){
  // return a + b; como o parametro poder ser um numero ou string o typescript exibe um alerta
  // para evitar que uma string seja somada com numero
  // para funcionar devera ser chacado antes
  if(typeof a == "number" && typeof b == "number" ) return a + b;
  return `${a} ${b}`; 
  // desa forma o typescript entende que nao ha possibilidades de uma string ser somada com um numero
}

console.log(addConcat("l",33));
console.log(addConcat("l","a"));
console.log(addConcat(1,1));
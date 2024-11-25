// neve significa dizer que o metodo nunca irá retornar nada;


function createError():never{
  throw new Error("erro de logica");
  
}

createError();
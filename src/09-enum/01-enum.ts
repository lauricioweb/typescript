enum Cores {
  VERMELHO,
  AZUL,
  AMARELO
}

// caso exista dois enums com o mesmo nome os dois seriam unidos.

// é possivel atribiuir valores iniciais para os tipos
enum Cores2 {
  VERMELHO = 3,
  AZUL, // aqui seria 4
  AMARELO // aqui seria 5
}

// ao atribuir valores em string o tipo seguinte nao sera capaz de atribuir uma chava, tendo que ser inserida manualmente.

enum Cores3 {
  VERMELHO = "vermelho",
  AZUL = 2,
  AMARELO // aqui seria 3
}



console.log(Cores.VERMELHO);
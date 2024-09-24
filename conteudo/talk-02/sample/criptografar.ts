import codificarMensagem from "./utils/codificarMensagem.ts";

import formatarMensagemParaCodificar from "./utils/formatarMensagemParaCodificar.ts";
import obterArgumentos from "./utils/obterArgumentos.ts";

function main () {
  const argumentos = obterArgumentos(process)
  console.log(argumentos)
  const mensagemFormatada = formatarMensagemParaCodificar(argumentos.mensagem)
  
  const mensagemCodificada = codificarMensagem(mensagemFormatada, argumentos.intervalo)
  console.log(mensagemCodificada)
}

main()
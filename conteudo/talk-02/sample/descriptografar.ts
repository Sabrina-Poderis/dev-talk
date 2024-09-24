import decodificarMensagem from "./utils/decodificarMensagem.ts";
import formatarMensagemParaCodificar from "./utils/formatarMensagemParaCodificar.ts";
import obterArgumentos from "./utils/obterArgumentos.ts";

function main () {
  const argumentos = obterArgumentos(process)
  const mensagemFormatada = formatarMensagemParaCodificar(argumentos.mensagem)
  
  const mensagemDecodificada = decodificarMensagem(mensagemFormatada, argumentos.intervalo)
  console.log(mensagemDecodificada)
}

main()
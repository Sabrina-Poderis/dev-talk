import codificarMensagem from "./validador/codificarMensagem.ts";
import formatarMensagemParaCodificar from "./validador/formatarMensagemParaCodificar.ts";

function main () {
  const mensagemDigitadaNoTerminal = process.argv[2];
  const intervaloDigitadoNoTerminal = process.argv[3] ? Number(process.argv[3]) : 3;
  const mensagemFormatada = formatarMensagemParaCodificar(mensagemDigitadaNoTerminal)
  const mensagemCodificada = codificarMensagem(mensagemFormatada, intervaloDigitadoNoTerminal)
  console.log(mensagemCodificada)
}

main()
import formatarMensagemParaCodificar from "./validador/formatarMensagemParaCodificar.ts";

function main () {
  const entradaDigitadaNoTerminal = process.argv[2];
  const mensagemFormatada= formatarMensagemParaCodificar(entradaDigitadaNoTerminal)
  console.log(mensagemFormatada)
}

main()
import codificarMensagem from "./utils/codificarMensagem.ts";
import decodificarMensagem from "./utils/decodificarMensagem.ts";
import formatarMensagemParaCodificar from "./utils/formatarMensagemParaCodificar.ts";

function main () {
  const mensagemDigitadaNoTerminal = process.argv[2];
  const intervaloDigitadoNoTerminal = process.argv[3] ? Number(process.argv[3]) : 3;
  const mensagemFormatada = formatarMensagemParaCodificar(mensagemDigitadaNoTerminal)
  const comando = process.env.npm_lifecycle_event;

  if(comando === "criptografar"){
    const mensagemCodificada = codificarMensagem(mensagemFormatada, intervaloDigitadoNoTerminal)
    console.log(mensagemCodificada)
  }

  if(comando === "descriptografar"){
    const mensagemDecodificada = decodificarMensagem(mensagemFormatada, intervaloDigitadoNoTerminal)
    console.log(mensagemDecodificada)
  }
}

main()
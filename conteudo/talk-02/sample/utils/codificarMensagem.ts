import alfabetoPadrao from "../constantes/alfabetoPadrao.ts";

const codificarMensagem = (mensagem: string, intervalo: number) : string => {
  const mensagemCodificada = mensagem.split('').map((caracter: string) => {
    const posicaoAtual = alfabetoPadrao.indexOf(caracter);
    const acabouAlfabeto = posicaoAtual + 1 >= alfabetoPadrao.length

    if(acabouAlfabeto){
      const novaPosicao = (alfabetoPadrao.length - 1) - posicaoAtual
      return alfabetoPadrao[novaPosicao + intervalo]
    } else {
      return alfabetoPadrao[posicaoAtual + intervalo]
    }
  })

  return mensagemCodificada.join('')
}

export default codificarMensagem
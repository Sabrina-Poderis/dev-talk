import alfabetoPadrao from "../constantes/alfabetoPadrao.ts"

const formatarMensagemParaCodificar = (mensagem: string) : string => {
  const mensagemFormatada = mensagem.split('').map((caracter: string) => {
    if(alfabetoPadrao.includes(caracter)){
      return caracter
    } else {
      return '?'
    }
  })

  return mensagemFormatada.join('')
}

export default formatarMensagemParaCodificar
const alfabetoPadrao = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇÃÉÀÊÓÁÔÍ0123456789abcdefghijklmnopqrstuvwxyzçãéàêóáôí'

const formatarMensagemParaCodificar = (mensagem: string) : string => {
  const mensagemFormatada = mensagem.split('').map((caracter: string) => {
    if(alfabetoPadrao.includes(caracter)){
      return caracter
    } else {
      return '?'
    }
  })

  console.log(mensagemFormatada)
  return mensagemFormatada.join('')
}

export default formatarMensagemParaCodificar
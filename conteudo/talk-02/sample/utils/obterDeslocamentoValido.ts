const obterDeslocamentoValido = (deslocamento: string): number => {
  const deslocamentoDefault = 3;
  const deslocamentoFormatado = Number(deslocamento)

  if(isNaN(deslocamentoFormatado)){
    return deslocamentoDefault
  }
  
  return deslocamentoFormatado
}

export default obterDeslocamentoValido
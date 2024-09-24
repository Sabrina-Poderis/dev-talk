import obterDeslocamentoValido from "./obterDeslocamentoValido.ts"

const obterArgumentos = (entrada: NodeJS.Process) => {
  return {
    mensagem: entrada.argv[2],
    intervalo: obterDeslocamentoValido(entrada.argv[3]),
  }
}
export default obterArgumentos
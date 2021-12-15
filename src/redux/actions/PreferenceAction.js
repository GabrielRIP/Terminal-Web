export const ELIGE_TITULO = 'ELIGE_TITULO'

export const elegirTitulo = (miTitulo) => {
  return {
    type: ELIGE_TITULO,
    payload: miTitulo
  }
}

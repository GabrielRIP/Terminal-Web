export const ELIGE_TITULO = 'ELIGE_TITULO'

export const elegir_titulo = ( miTitulo ) => {
  return {
    type: ELIGE_TITULO,
    payload: miTitulo
  }
}

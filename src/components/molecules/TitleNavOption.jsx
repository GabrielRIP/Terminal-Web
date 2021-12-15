import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { elegirTitulo } from '../../redux/actions/PreferenceAction'

export default function TitleNavOption ({ texto, styleSpan }) {
  const preferenceState = useSelector(state => state.preferenceState)
  const dispatch = useDispatch()

  function selectTitle (e) {
    const title1 = document.querySelector(`.${preferenceState.titleOne}`)
    const title2 = document.querySelector(`.${preferenceState.titleTwo}`)
    const title3 = document.querySelector(`.${preferenceState.titleThree}`)
    let text // devuelve el nombre del titulo

    if (e.target.classList[2] === preferenceState.titleOne) {
      title2.style.background = 'transparent'
      title3.style.background = 'transparent'
      title1.style.background = '#0074d9'
      text = e.target.innerText
    }

    if (e.target.classList[2] === preferenceState.titleTwo) {
      title1.style.background = 'transparent'
      title3.style.background = 'transparent'
      title2.style.background = '#0074d9'
      text = e.target.innerText
    }

    if (e.target.classList[2] === preferenceState.titleThree) {
      title1.style.background = 'transparent'
      title2.style.background = 'transparent'
      title3.style.background = '#0074d9'
      text = e.target.innerText
    }
    dispatch(elegirTitulo(text))
  }

  return (
    <Parrafo className={texto} onClick={selectTitle} style={styleSpan}>
      {texto}
    </Parrafo>
  )
}

const Parrafo = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 600;
  height: 1.8rem;
  padding: 0 1rem;
  margin: 5px 0;
  border-radius: 1rem;
`

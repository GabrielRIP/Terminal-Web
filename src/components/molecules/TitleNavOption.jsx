import { useSelector } from "react-redux"
import { useEffect } from "react";
import styled from "styled-components"

export default function TitleNavOption({ texto }) {
  const preferenceState = useSelector(state => state.preferenceState)

  useEffect(() => {
    const firtsTitle = document.querySelector('.Colors .spamer')
    firtsTitle.style.background = '#0074d9'
  });

  function selectTitle(e) {
    const title1 = document.querySelector(`.${preferenceState.titleOne}`)
    const title2 = document.querySelector(`.${preferenceState.titleTwo}`)
    const title3 = document.querySelector(`.${preferenceState.titleThree}`)

    if(e.target.classList[2] === preferenceState.titleOne) {
      title2.lastChild.style.background = 'transparent'
      title3.lastChild.style.background = 'transparent'
      title1.lastChild.style.background = '#0074d9'
    } else if(e.target.classList[2] === preferenceState.titleTwo) {
      title1.lastChild.style.background = 'transparent'
      title3.lastChild.style.background = 'transparent'
      title2.lastChild.style.background = '#0074d9'
    } else if(e.target.classList[2] === preferenceState.titleThree) {
      title1.lastChild.style.background = 'transparent'
      title2.lastChild.style.background = 'transparent'
      title3.lastChild.style.background = '#0074d9'
    }
  }

  return (
    <Parrafo className={texto} onClick={selectTitle}>
      {texto}
      <Spamaso className="spamer"></Spamaso>
    </Parrafo>
  )
}

const Parrafo = styled.p`
  color: white;
  font-weight: 600;
  height: 1.8rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const Spamaso = styled.span`
  width: 100%;
  height: 3px;
`

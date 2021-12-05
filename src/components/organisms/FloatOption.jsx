import {useSelector} from "react-redux"

import TitleNavOption from '../molecules/TitleNavOption'

export default function FloatOption() {
  const preferenceState = useSelector(state => state.preferenceState)
  return (
    <>
      <header className="nav">
        <nav className="navOptions">
          <TitleNavOption texto={preferenceState.titleOne}/> 
          <TitleNavOption texto={preferenceState.titleTwo}/> 
          <TitleNavOption texto={preferenceState.titleThree}/> 
        </nav>
      </header>
      <main>
        hola como estan
      </main>
      <div className="slider"></div>
    </>
  )
  
}

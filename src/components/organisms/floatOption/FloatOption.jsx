import {useSelector} from "react-redux"

//Import Components
import TitleNavOption from '../../molecules/TitleNavOption'
import FirstBox from './options/FirstBox'
import SecondBox from './options/SecondBox'
import ThirdBox from './options/ThirdBox'



export default function FloatOption() {
  const preferenceState = useSelector(state => state.preferenceState)
  const styleParaSpan = {background: '#0074d9'}

  const ElegirBox = () => {
    let diminutive = preferenceState.tituloElegido

    if(diminutive === '' || diminutive === 'Colors') return <FirstBox />
    if(diminutive === 'Fonts') return <SecondBox />
    if(diminutive === 'Characters') return <ThirdBox />
  }

  const styleMain = { padding: '1rem' }

  return (
    <>
      <header className="nav">
        <nav className="navOptions">
          <TitleNavOption texto={preferenceState.titleOne} styleSpan={styleParaSpan}/> 
          <TitleNavOption texto={preferenceState.titleTwo}/> 
          <TitleNavOption texto={preferenceState.titleThree}/> 
        </nav>
      </header>
      <main style={styleMain}>
        { ElegirBox() }
      </main>
      <div className="slider"></div>
    </>
  )
}


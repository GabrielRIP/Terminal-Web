import { useSelector } from 'react-redux'

// Import Components
import LsdContent from '../organisms/LsdContent'
import ZshContent from '../organisms/ZshContent'
import FloatOption from '../organisms/floatOption/FloatOption'

// Styled Components and CSS
import { MainContainer, MainSubContainer } from './style/mainTerminal.js'
import './style/style.css'

export default function MainTerminal () {
  const navOptionState = useSelector(state => state.navOptionState)

  function contentPreference () {
    if (navOptionState.stateBoolean) {
      return <FloatOption />
    } else {
      return <></>
    }
  }

  return (
    <MainContainer>
      <MainSubContainer>
        <LsdContent />
        <ZshContent />
        <div className={navOptionState.classBoxFloat}>
          {contentPreference()}
        </div>
      </MainSubContainer>
    </MainContainer>
  )
}

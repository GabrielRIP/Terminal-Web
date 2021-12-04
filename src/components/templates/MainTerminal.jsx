//Import Components
import LsdContent from '../organisms/LsdContent'
import ZshContent from '../organisms/ZshContent'

//Styled Components
import { MainContainer, MainSubContainer } from './style/mainTerminal.js'

export default function MainTerminal() {
  return (
    <MainContainer>
      <MainSubContainer>
        <LsdContent />
        <ZshContent />
      </MainSubContainer>
    </MainContainer>
  )
}

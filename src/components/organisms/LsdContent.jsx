import styled from 'styled-components'
import LsdList from '../molecules/LsdList'

import { LsdData } from './LsdData.js'

export default function LsdContent () {
  return (
    <LsdContainer>
      {LsdData.map(ele => (
        <LsdList
          key={ele.id}
          classPersonalizado={ele.newClass}
          typeD={ele.iconSvg}
          valueLsdText={ele.contentText}
        />
      ))}
    </LsdContainer>
  )
}

const LsdContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

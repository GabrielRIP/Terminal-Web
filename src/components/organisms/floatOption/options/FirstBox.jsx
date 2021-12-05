import styled from "styled-components"

export default function PrimerBox() {
  return (
    <>
      <Box1>
        <InputDefault type="checkbox" name="defaultSystem" id="defaultSystem"/>
        <LabelDefault htmlFor="defaultSystem">Usar colores del tema del sistema</LabelDefault>
      </Box1>
    </>
  )
}
const Box1 = styled.div`
  display: flex;
  align-items: center;
`

const InputDefault = styled.input`
  margin-right: 1rem;
`

const LabelDefault = styled.label`
  font-family: monospace;
`

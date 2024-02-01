import { SectionStyled } from "components/styled/styled"

const Section = ({children}) => {
  return (
    <SectionStyled>
        { children }
    </SectionStyled>
  )
}

export default Section
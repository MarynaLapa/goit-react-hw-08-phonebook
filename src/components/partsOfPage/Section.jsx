import { SectionStyled } from "components/styled/formStyled"

const Section = ({children}) => {
  return (
    <SectionStyled>
        { children }
    </SectionStyled>
  )
}

export default Section
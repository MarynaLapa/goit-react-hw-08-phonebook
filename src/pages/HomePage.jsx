import Button from "components/partsOfPage/Button"
import Container from "components/partsOfPage/Container"
import Section from "components/partsOfPage/Section"

const HomePage = () => {
  return (
    <Section>
      <Container>
        <h1>Welcome to the phonebook</h1>
        <Button text={'Get started'} type={'button'} />
      </Container>
    </Section>
  )
}

export default HomePage
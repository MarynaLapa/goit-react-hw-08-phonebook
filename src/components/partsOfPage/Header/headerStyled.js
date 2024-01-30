import styled from "styled-components"

export const HeaderStyled = styled.header`
  border-bottom: 2px solid #c4c4f2;
  /* padding: 16px 32px; */
`
export const HeaderContainer = styled.div`
  padding: 0 32px;
  width: 1460px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Navigate = styled.nav`
    padding: 16px 0;
    ul {
        display: flex;
        gap: 12px;
    }
    a {
        color: black;
        text-decoration: none;
        font-size: 24px;
        &.active {
            color: #0000ff59;
        }
    }
`
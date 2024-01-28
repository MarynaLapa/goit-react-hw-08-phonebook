import styled from "styled-components"

export const FormContainer = styled.form`
  text-align: left;
  font-style: italic;
  h1 {
    font-family: 'Dancing Script', cursive; 
    font-size: 48px;  
    margin-bottom: 24px;
  }
  div{
    height: 100px;
  }
  input{
      background-color: #eeeeee63;;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
      border-radius: 4px;
  }

  span {
    color: red;
    display: block;
    font-size: 10px;
    text-align: left;
  }
`

export const Wrap = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
  position: relative;
  overflow: hidden;
  width: 768px;
  // max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h2 {
    font-family: 'Dancing Script', cursive; 
    font-size: 36px;
    margin-bottom: 24px;
  }

  p{
    margin-bottom: 48px;
  }
`

export const FormWrapper = styled.div`
  border-top-right-radius: 10px;
  width: 50%;
  height: 600px;
  background: #fff;
  text-align: center;
  padding: 100px 40px;
`

export const WrapperStyled = {
    backgroundColor: "#c4c4f2",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center"
}

export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #9898d8;
    background-color: #7d7da9;
    box-shadow: 0 15px 15px rgba(124, 97, 245, 0.2);
    color: #fff;
    font-family: 'Dancing Script', cursive; 
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    padding: 12px 45px;
    width: 160px;

    &:active {
      transform: scale(.95);
    }

    &:focus, 
    &:hover {
      outline: none;
      background-color: #0000ff59;
    }

    &.ghost {
      background: transparent;
      border-color: #fff;
    }
`


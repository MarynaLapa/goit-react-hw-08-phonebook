import styled from "styled-components"
import image from '../image/hero-img.png';
import sectionImage from '../image/img-1.png'

export const FormContainer = styled.form`
  font-style: italic;

  h1 {
    text-align: left;
    font-family: 'Dancing Script', cursive; 
    font-size: 48px;  
    margin-bottom: 24px;
  }

  div {
    text-align: left;
    height: 100px;
  }

  input {
      background-color: #eeeeee63;;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
      border-radius: 4px;
  }

  span {
    text-align: left;
    color: red;
    display: block;
    font-size: 10px;
    text-align: left;
  }
`

export const Wrap = styled.div`
  /* background: #fff; */
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
  background: rgba(0, 0, 0, 0);

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
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    padding: 12px 45px;
    min-width: 160px;

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
export const HomeButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(#2196F3, #b8bddb);
`

export const Title = styled.h1`
    font-size: 64px;
    padding-left: 16px;
    font-family: 'Dancing Script', cursive; 
    margin-bottom: 40px;
`;

export const TitleSection = styled.h2`
    font-size: 48px;
    font-family: 'Dancing Script', cursive;
    margin-bottom: 32px;
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SectionStyled = styled.section`
    padding: 40px 0;
`

export const SectionContacts = styled.section`
    padding: 40px 0;
    background-image: url(${sectionImage});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 1000px;
`

export const Hero = styled.div`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 1300px;
    padding: 0 32px;
    width: 1460px;
    height: 90vh;
    margin: 0 auto;
` 


export const Loader = styled.span`
  color: #ffffff;
  font-size: 45px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
    @keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
` 


 
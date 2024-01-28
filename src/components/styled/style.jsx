import styled from 'styled-components';

const SectionStyled = styled.section`
    padding: 40px 0;
`
const Wrapper = styled.div`
    // display: ${(props) => props ? "flex" : "block"};
    // justify-content: space-between;
    // align-tems: center;
    padding: 0 32px;
    width: 1460px;
    margin: 0 auto;
`

const List = styled.ul`
    position: relative;
    display: table-cell;
    font-size: 24px;
    text-transform: capitalize;
    list-style: none;
    span::before {
        content: '';
        margin-right: 8px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #6f6ffa;

    }
    li:not(:last-child) {
        padding-bottom: 8px; 
    }
    span {
        vertical-align: middle;
        padding-right: 12px;
    } 
    // button {
    //     padding: 4px 8px;
    //     width: 120px;
    //     background-color: #6f6ffa;
    //     border: none;
    //     border-radius: 8px;
    //     cursor: pointer;
    //     color: white;
    //     font-family: inherit;
    //     font-size: medium;
    //     letter-spacing: 1px;
    //     box-shadow: 0 15px 15px rgba(124, 97, 245, 0.2);
    //     &:hover {
    //         background-color: #0404ac;
    //         letter-spacing: 2px;
    //         scale: 1.01;
    //     }
    } 
`;

const InputContainer = styled.div`
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: flex-start;
    text-transform: capitalize;
    gap: 4px;
    input {
        width: 100%;
        margin-bottom: 8px;
        border-radius: 4px;
        border: 1px solid #6f6ffa;
        outline: none;
        font-size: 16px;
        text-transform: capitalize;
    }
`;

const Container = styled.div`
    margin: 20px;
`;

const FormStyled = styled.form`
    width: 320px;
    heigth: 480px;
    text-align: center;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`; 

const Title = styled.h1`
    font-size: 56px;
    padding-left: 16px;
    font-family: 'Dancing Script', cursive; 
`;

const TitleSection = styled.h2`
    font-size: 34px;
    font-family: 'Dancing Script', cursive;
    padding-left: 16px;
`;

export {SectionStyled, Wrapper, List, InputContainer, Container, FormStyled, Title, TitleSection}
import styled from 'styled-components';
 
const Wrapper = styled.div`
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
        border: 1px solid #dbdbeb;
        outline: none;
        font-size: 16px;
        text-transform: capitalize;
        background-color: white;;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        border-radius: 4px;
    }
    label {
        font-style: italic;
    }
`;

const Container = styled.div`
    margin: 20px;
`;

const FormStyled = styled.form`
    text-align: center;
    /* background: #fff; */
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0);
`; 

export { Wrapper, List, InputContainer, Container, FormStyled}
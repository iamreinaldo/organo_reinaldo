import styled from "styled-components";

const ButtonStyle = styled.button`
    background-color: #6278F7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color: #fff;
    margin: 32px 0;
    &:hover{
        color: #95ffd4;
    }

`

const Botao = (props) => {
    return(
        <ButtonStyle>
            {props.children}
        </ButtonStyle>
    )
}

export default Botao
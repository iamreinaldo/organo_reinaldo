import styled from "styled-components"

const TextConteiner = styled.div`
    margin 24px 0;
`

const LabelStyle = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`
const InputStyle = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rbga(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: boder-box;
`

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <TextConteiner>
            <LabelStyle>{props.label}</LabelStyle>
            <InputStyle value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </TextConteiner>
    )
}

export default CampoTexto
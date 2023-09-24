import styled from "styled-components";


const ListaConteiner = styled.div`
display: block;
margin-bottom: 8px;
font-size: 24px;
`
const SelectStyle = styled.select`
background-color: #FFF;
box-shadow: 10px 10px 30px rbga(0, 0, 0, 0.06);
width: 100%;
border: none;
font-size: 24px;
padding: 24px;
box-sizing: boder-box;
`

const LabelStyle = styled.label`
display: block;
margin-bottom: 8px;
font-size: 24px;
`

const ListaSuspensa = (props) => {
    return(
        <ListaConteiner>
            <LabelStyle>{props.label}</LabelStyle>
            <SelectStyle onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </SelectStyle>
        </ListaConteiner>

    )
}

export default ListaSuspensa
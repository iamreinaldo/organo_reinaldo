import styled from "styled-components";
import Colaborador from "../Colaborador/Colaborador";

const SectionStyles = styled.section`
    text-align: center;
    padding: 32px;
`

const H3Styles = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`
const DivColaboradores = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    flex-wrap: wrap;
`

const Time = (props) => {
    return(
        props.colaborador.length > 0 && <SectionStyles style={{backgroundColor: props.corSecundaria}}>
            <H3Styles style={{borderColor: props.corPrimaria}}>{props.nome}</H3Styles>
            <DivColaboradores>
                {props.colaborador.map( colaboradores => <Colaborador corDeFundo={props.corPrimaria} key={colaboradores.nome} nome={colaboradores.nome} cargo={colaboradores.cargo} imagem={colaboradores.imagem}/> )}
            </DivColaboradores>
        </SectionStyles>
    )
}

export default Time
import styled from "styled-components";

const SectionStyles = styled.section`
    text-align: center;
    padding: 32px;
    background-color: #d9f7e9;
`

const H3Styles = styled.h3`
    font-size: 32px;
    border-bottom: 4px solid #57c278;
    display: inline-block;
    padding-bottom: 8px;
`

const Time = (props) => {
    return(
        <SectionStyles>
            <H3Styles>{props.nome}</H3Styles>
        </SectionStyles>
    )
}

export default Time
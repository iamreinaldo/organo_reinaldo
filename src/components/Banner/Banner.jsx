import styled from 'styled-components';

const BannerConteiner = styled.header`
    background-color: #6278f7;
    text-align: center;
    `
    
const BannerImg = styled.img`    
    max-width: 100%;
    `

export const Banner = () => {
    return (
        <BannerConteiner>
            <BannerImg src="/imagens/banner.png" alt="O banner principal" />
        </BannerConteiner>
    )
}

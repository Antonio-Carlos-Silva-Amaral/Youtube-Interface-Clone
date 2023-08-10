import styled from "styled-components";

export const Container = styled.div`
    width: 98%;
    display: flex;
    
    @media only screen and (max-width: 600px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`;

export const ContainerBanner = styled.div`
    width: 400px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Containerescrita = styled.div`
    width: 98%;
    height: auto;
    @media only screen and (max-width: 600px){
        margin-top: 20px;
    }
`;


export const ImageBanner = styled.img`
    width: auto;
    height: 210px;
    border-radius: 12px;
    &:hover{
        cursor: pointer;
        border-radius: 0;
        
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 15px;
    margin-top: 10px;
    background-size: cover;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    font-size: 13px;
`;

export const Textcard = styled.span`
    color:#8c8c8c;
    font-size: 14px;
`;

export const Textcard2 = styled.span`
    color:#8c8c8c;
    font-size: 14px;
    
`;


export const ContainerChaneel = styled.div`
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
`;


export const DescriptionContainer = styled.div`
    margin-top: 15px;
`;
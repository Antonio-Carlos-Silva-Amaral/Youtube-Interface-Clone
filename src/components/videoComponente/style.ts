import styled from "styled-components";

export const Container = styled.div`
   width: 98%;
  
`;

export const ImageBanner = styled.img`
    width: 100%;
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


export const ContainerChaneel = styled.div`
    width: 60px;
    height: 60px;
`;
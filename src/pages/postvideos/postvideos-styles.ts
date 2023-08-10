import styled from "styled-components";

interface ValidarInput{
    validar:boolean
}

export const ContainerGerall = styled.div`
width: 100vw;
height: 100vh;
`;

export const ContainerDosVideos = styled.div`
width: 100%;
max-width: 1650px;
display: grid;
grid-template-columns: repeat(3 , 1fr);
column-gap: 20px;
row-gap: 50px;
box-sizing: border-box;

@media only screen and (max-width: 600px){
    width: 100vw;
    grid-template-columns: repeat(1, 1fr);
    padding: 50px 0;
}
@media  (min-width: 601px) and (max-width: 940px){
    width: 100vw;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0;
}
`;

export const ContainerVideos = styled.div`
width: 100%;
max-width: 1650px;
display: flex;
flex-direction: column;
column-gap: 20px;
row-gap: 50px;
margin-top: 20px;
  
`;

export const ContainerPost = styled.div`
width: 42%;
height: 500px;
position: relative;
z-index: 999;
background-color: #fff;
border-radius: 13px;

@media only screen and (max-width: 940px){
    width: 80%;
}
`;

export const Overlay = styled.div<{openMenuPost:boolean}>`
  display: ${({openMenuPost}) => openMenuPost? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Cadastro =  styled.button`
background-color:  	#1E90FF;
color: #fff;
padding: 10px 15px;
border: none;
border-radius: 8px;
cursor: pointer;
&:hover{
    background-color: #87CEFA;
}
`;

export const Postar =  styled.button`
background-color:  	#1E90FF;
color: #fff;
padding: 10px 15px;
border: none;
border-radius: 8px;
margin: 0 0 15px 20px;
cursor: pointer;
&:hover{
    background-color: #87CEFA;
}
`;

export const TituloName = styled.h1`
width: 500px;
height: auto;
margin-top: 90px;
`; 
export const TituloNamePost = styled.h1`
width: 100%;
height: auto;
text-align: center;

`; 



export const CloseButton = styled.button`
padding: 7px 15px;
border-radius: 8px;
background-color: #000;
color:#fff;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
border: none;

&:hover{
    background-color:#696969;
}
`;

export const ContainerInputPost = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
margin: 30px 0;
`;

export const InputPost = styled.input<ValidarInput>`
width: 85%;
margin: 10px 0 10px 20px ; 
padding: 13px 5px;
border-radius: 8px;
border:${({validar}) => validar? '1px solid #BABABA': '1px solid #d93025' } ;
outline: none;

&:focus{
    border:${({validar}) => validar? '3px solid  #1A73E8' : '2px solid  #d93025'};
    outline: none;
}
`;

export const MessageContent = styled.div`
width: auto;
height: auto;
color: #d93025;
font-family: 'Roboto', "Noto Sans Myanmar UI", Arial, sans-serif;
font-size: 12px;
margin-left: 20px;
`;


export const Container = styled.div`
   width: 98%;
`;
export const ContainerExemplo = styled.div`
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


import styled from "styled-components";

interface Validinput {
    validar: boolean
}

export const ContainerGeral = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`;
export const Container = styled.div`
width: 450px;
height: 550px;
background-color: white;
border-radius: 9px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #BABABA;
@media only screen and (max-width: 555px){
    width: 85%;
}
`;

export const TituloContainer = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-top: 50px;
`;

export const Titulo1 = styled.p`
margin: 15px 0 10px 0 ;
font-size: 24px;
font-family: 'Google Sans', 'Noto Sans Myanmar UI', Arial, sans-serif;
`;

export const Titulo2 = styled.p`
margin: 0;
font-size: 16px;
font-family: 'Roboto', 'Noto Sans Myanmar UI', Arial, sans-serif;
`;

export const GoogleLogo = styled.img`
width: 70px;
height: auto;
`;

export const ConatinerInput = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;

margin-top: 30px;

`;

export const Inputcamp = styled.input<Validinput>`
width: 80%;
height: 40px;
margin: 10px 40px;
border-radius: 5px;
border:${({validar}) => validar? '1px solid #BABABA': '1px solid #d93025' } ;
font-size: 16px;

&:focus{
    border:${({validar}) => validar? '3px solid  #1A73E8' : '2px solid  #d93025'};
    outline: none;
}
`;
export const InputPassword = styled.input<Validinput>`
width: 50%;
height: 30px;
margin: 10px 40px;
border-radius: 5px;
border:${({validar}) => validar? '1px solid #BABABA': '1px solid #d93025' } ;
font-size: 16px;

&:focus{
    border:${({validar}) => validar? '3px solid  #1A73E8' : '2px solid  #d93025'};
    outline: none;
}
`;
export const ComparePassword = styled.input<Validinput>`
width: 50%;
height: 30px;
margin: 10px 40px;
border-radius: 5px;
border:${({validar}) => validar? '1px solid #BABABA': '1px solid #d93025' } ;
font-size: 16px;

&:focus{
    border:${({validar}) => validar? '3px solid  #1A73E8' : '2px solid  #d93025'};
    outline: none;
}
`;

export const ContainerButtons = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
align-items: center;

`;

export const CriarConta = styled.span`
width: auto;
height: 20px;
font-size: 14px;
color: #1A73E8;
cursor: pointer;
&:hover{
    background-color: #F6FAFE
}
`;

export const Buttonlogin2 = styled.button`
width: auto;
height: auto;
padding: 10px 25px;
border-radius: 5px;
border: none;
color: #fff;
background-color: #1C5FBA;
cursor: pointer;
`;


export const ContainerPassword = styled.div`
width: 100%;
height: auto;
display: flex;
`;

export const CheckBoxContainer = styled.div`
width: auto;
height: 50px;
padding: 5px 0 0 38px;
font-family: 'Roboto', "Noto Sans Myanmar UI", Arial, sans-serif;
font-size: 0.875rem;
`
;



export const MessageContent = styled.div`
width: auto;
height: auto;
padding: 0 0 0 43px ;
color: #d93025;
font-family: 'Roboto', "Noto Sans Myanmar UI", Arial, sans-serif;
font-size: 12px;
`;


export const Inputmessage = styled.span<Validinput>`
display: ${({validar}) => validar? 'none' : 'block'};
`;


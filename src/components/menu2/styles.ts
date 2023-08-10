import styled, {css, keyframes } from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container2 = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => openMenu ? '230px' : 'none'};
  height: 100vh;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
 background-color: white;
 ${({ openMenu }) => openMenu && css`
    animation: ${css`${Efeito} 0.3s forwards`};
  `};
 
`;

export const LogoContainer2 = styled.div<{ openMenu: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  bottom: 12px;
  left: 5px;
  
`;
export const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
      background-color: #f2f2f2;
  }

`;



const Efeito = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;








export const MenuItem = styled.div<{openMenu:boolean}>`
width: 98%;
min-height: ${({openMenu}) => openMenu? '45px':'70px'};;
border-radius: 10px;
cursor: pointer;
padding: 2px 15px;
box-sizing: border-box;
display: flex;
flex-direction: ${({openMenu}) => openMenu? 'row':'column'};
align-items: center;
justify-content: ${({openMenu}) => openMenu? 'none':'center'};

font-weight: 100;
color: #0f0f0f;
font-size: 14px;

span{
    font-weight: ${({openMenu}) => openMenu? '600':'400'};
    margin-left: ${({openMenu}) => openMenu? '20px':'none'};
    font-size: ${({openMenu}) => openMenu? '14px':'12px'};;
}

&:hover{
  background-color: #f2f2f2;
}
`;

export const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


export const ButtonIcon = styled.img`
width: 20px;
`;


export const Linha = styled.div<{openMenu:boolean}>`
  width: ${({openMenu})=> openMenu? '100%':'none'};
  border: 0.1px solid #E6E6E6;
  margin: 10px 0;
  display: ${({openMenu})=> openMenu? 'block':'none'};
`;
export const Linha2 = styled.div<{openMenu:boolean}>`
  width: ${({openMenu})=> openMenu? '100%':'none'};
  border: 0.1px solid #ffff;
  margin: 5px 0;
`;

export const Titulo = styled.div<{openMenu:boolean}>`
width: 90%;
cursor: auto;
padding: 2px 17px;
box-sizing: border-box;
margin: 0 0 10px 0;
font-weight: 400;
font-size: 16px;
display: ${({openMenu})=> openMenu? 'block':'none'};
`;




export const MenuItem2 = styled.div<{openMenu:boolean}>`
width: 98%;
min-height: ${({openMenu}) => openMenu? '45px':'70px'};;
border-radius: 10px;
cursor: pointer;
padding: 2px 15px;
box-sizing: border-box;
display: ${({openMenu}) => openMenu? 'flex':'none'};
flex-direction: ${({openMenu}) => openMenu? 'row':'column'};
align-items: center;
justify-content: ${({openMenu}) => openMenu? 'none':'center'};

span{
    font-weight: ${({openMenu}) => openMenu? '600':'400'};
    margin-left: ${({openMenu}) => openMenu? '20px':'none'};
    font-size: ${({openMenu}) => openMenu? '14px':'12px'};;
}

&:hover{
  background-color: #f2f2f2;
}
`;

export const Menuitem3 = styled.div<{openMenu:boolean}>`
width: 100%;
display: ${({openMenu})=> openMenu? 'block':'none'};
border-radius: 10px;
box-sizing: border-box;

span{
    font-weight: 500;
    font-size: 13px;
    color: #606060;
    margin-left: 27px;
    cursor: pointer;
}

.span2{
   font-weight: 500;
    font-size: 13px;
    color: #606060;
    position: relative;
    right: 18px;
    cursor: pointer;
}

`;

export const Menuitem4 = styled.div<{openMenu:boolean}>`
width: 100%;
display: ${({openMenu})=> openMenu? 'block':'none'};
border-radius: 10px;
box-sizing: border-box;

span{
    font-weight: 500;
    font-size: 13px;
    color: #606060;
    margin-left: 27px;
    cursor: pointer;
}

.span2{
   font-weight: 500;
    font-size: 13px;
    color: #606060;
    position: relative;
    right: 18px;
    cursor: pointer;
}

.span3{
  font-weight: 500;
    font-size: 12px;
    color: #909090;
    margin-left: 27px;
    cursor: auto;
}

`;

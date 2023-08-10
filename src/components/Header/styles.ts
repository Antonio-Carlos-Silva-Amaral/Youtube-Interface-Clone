import styled from "styled-components";

interface Drop {
    openDropdown:boolean
}
interface Responsive {
  openSearchInput:boolean
}

export const Overlay = styled.div<Responsive>`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: #fff;
  display: none;
  @media only screen and (max-width: 940px){
    display: ${({openSearchInput}) => openSearchInput? 'block' : 'none'};
  }
`;

export const LogoYT = styled.img`
  width: 95px;
  cursor: pointer;

  
`;

export const Container = styled.header`
  width: 100vw;
  height: 63px;
  background-color: #fff;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;

  @media only screen and (max-width: 940px){
    height: 60px;
}
 
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 940px){
  position: relative;
  right:30px;    
}
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }


`;
export const ButtonContainer2 = styled.div<{margin?:string}>`
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

export const ButtonIcon = styled.img`
  width: 20px;
`;
export const ButtonIcon2 = styled.img`
  width: 21px;
`;
export const ButtonMenuDropdown = styled.img`
  width: 21px;
`;


export const Apagaricon = styled.img<{limpar:boolean}>`
  width:15px;
  display:${({limpar})=> limpar? 'block':'none'};
`;


export const SearchContainer = styled.div<Responsive>`
  display: flex;

@media only screen and (max-width: 940px){
  position: fixed;
    top: ${({openSearchInput})=> openSearchInput? '10px':'-100px'};
    right: 5px;
    width: 85%;
    z-index: 6;
    background-color: #fff;
    height: 50px;
}
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton =styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const MicroIcon = styled.div`
  @media only screen and (max-width: 940px){
    display: none;
  }
`;

export const OpenSearchButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: none;

@media only screen and (max-width: 940px){
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f8f8f8;
    }
`;
export const CloseSearchButton = styled.div<Responsive>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: none;

@media only screen and (max-width: 940px){
    display: ${({ openSearchInput}) =>  openSearchInput? 'flex': 'none'};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f8f8f8;
    position: fixed;
    top: 10px;
    left: 5px;
    z-index: 6;

}
`;

export const Apagarbutton = styled.div<{limpar:boolean}>`
  cursor: pointer;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  display:${({limpar})=> limpar? 'flex':'none'};
  &:hover{
    background-color: #f2f2f2;
  }

`;

export const HeaderButtons = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    margin-right: 4%;
`;


export const ButtonLogin = styled.button`
  border-radius: 18px;
  width: 140px;
  height: 35px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: 	#0010C4;
  border: 1px solid #d3d3d3;
  font-size: 15px;

&:hover{
    background-color: #B8E9FF;
    cursor: pointer;
}
`;


export const DropdownMenu = styled.div<Drop>`
  width: 110px;
  height: 100px;
  background-color: #fff;
  position: absolute;
  top: 37px;
  right: ${({ openDropdown}) =>  openDropdown? '110px' : '-200px'};
  transition: 0.5s;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;



export const ExitButton =  styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
&:hover{
    background-color: #f2f2f2;
}
`;
export const ChanellButton =  styled.div`
  width: 98%;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 10px ;
  cursor: pointer;
&:hover{
    background-color: #f2f2f2;
}
`;

export const DropdownSpan = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;

import styled from 'styled-components'

export const Container = styled.div`
  width: 100px;
  height: calc(100vh - 55px) ;
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  position: sticky;

  @media only screen and (max-width: 940px){
    display: none;
  }
`;

export const Containeritems = styled.div`
  margin-top: 55px;
  position: fixed;
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











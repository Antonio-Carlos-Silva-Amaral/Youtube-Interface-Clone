import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1650px;
display: grid;
grid-template-columns: repeat(3 , 1fr);
column-gap: 20px;
row-gap: 50px;
margin-top: 90px;
padding:50px 70px;
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


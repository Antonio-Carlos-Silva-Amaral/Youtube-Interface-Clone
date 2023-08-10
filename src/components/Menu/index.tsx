import { ButtonIcon } from "../Header/styles";
import {
     Container,
     Containeritems,
     MenuItem, 
     } from "./styles";

import Inicio from '../../assets/botao-de-inicio.png'
import Shorts from '../../assets/Shorts.png'
import Incrições from '../../assets/Incrições.png'
import Biblioteca from '../../assets/biblioteca.png'
import { useNavigate } from "react-router-dom";



interface Iprops{
    openMenu:boolean
}


function MenuLateral ({openMenu}:Iprops) {

    const navegar = useNavigate();


    return(
        <Container>
            <Containeritems>
            <MenuItem openMenu={openMenu} onClick={()=> navegar('/')} >
                <ButtonIcon alt="" src={Inicio}/>
                <span>Inicio</span>         
            </MenuItem>
           <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Shorts}/>
                <span title="Biblioteca">Shorts</span>         
            </MenuItem>
           <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Incrições}/>
                <span title="Biblioteca">Incrições</span>         
            </MenuItem>
           <MenuItem openMenu={openMenu}>
                <ButtonIcon alt="" src={Biblioteca}/>
                <span title="Biblioteca">Biblioteca</span>         
            </MenuItem>
            </Containeritems>
        </Container>
        
    )
}

export default MenuLateral;
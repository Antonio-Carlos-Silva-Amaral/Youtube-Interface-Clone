import { 
  Container2, 
  LogoContainer2,
   ButtonContainer, 
   ButtonIcon,
    Overlay, 
    Linha,  
    Linha2,  
    MenuItem, 
    MenuItem2, 
    Menuitem3, 
    Menuitem4, 
    Title,
    Titulo, } 
    from "./styles";
import HumburguerIcon from '../../assets/hamburge.png';
import Logo from '../../assets/YouTube-Logo.png';
import { useState } from 'react';

import Inicio from '../../assets/botao-de-inicio.png'
import Shorts from '../../assets/Shorts.png'
import Incrições from '../../assets/Incrições.png'
import Biblioteca from '../../assets/biblioteca.png'
import Historico from '../../assets/historia.png'
import AssistirMaisTarde from '../../assets/relogio.png'
import Gostei from '../../assets/gostar.png'
import EmAlta from '../../assets/calorias.png'
import ShoppingIcon from '../../assets/shopping.png'
import MusicaIcon from '../../assets/Musica.png'
import FilmesIcon from '../../assets/Filmes.png'
import AovivoIcon from '../../assets/Ao-vivo.png'
import JogosIcon from '../../assets/Jogos.png'
import NoticiasIcon from '../../assets/Noticia.png'
import TrofeuIcon from '../../assets/trofeu.png'
import Aprender from '../../assets/aprender.png'
import YoutubeIcon from '../../assets/youtube.png'
import YoutubeMusic from '../../assets/youtube-music.png'
import YoutubeKids from '../../assets/youtube-kids.png'
import ConfiguraçaoICon from '../../assets/configuracoes.png'
import DenunciaICon from '../../assets/bandeira.png'
import AjudaICon from '../../assets/ajuda.png'
import FeedbackICon from '../../assets/enviar-feedback.png'
import { useNavigate } from "react-router-dom";




const items = [
  
  {name:'Shorts',Icone:Shorts,Title:'Shorts'},
  {name:'Inscrições',Icone:Incrições,Title:'Inscrições'},
  ]
  const items2 = [
  {name:'Histórico',Icone:Historico,Title:'Histórico',},
  {name:'Assitir mais tarde',Icone:AssistirMaisTarde,Title:'Assistir mais tarde'},
  {name:'Vídeos marcados com gostei',Icone:Gostei,Title:'Vídeos marcados com gostei'},
  ]
  const items3 = [
  {name:'Em alta',Icone:EmAlta,Title:'Em alta'},
  {name:'Shopping',Icone:ShoppingIcon,Title:'Shopping'},
  {name:'Música',Icone:MusicaIcon,Title:'Música'},
  {name:'Filmes',Icone:FilmesIcon,Title:'Filmes'},
  {name:'Ao vivo',Icone:AovivoIcon,Title:'Ao vivo'},
  {name:'Jogos',Icone:JogosIcon,Title:'Jogos'},
  {name:'Notícias',Icone:NoticiasIcon,Title:'Notícias'},
  {name:'Esportes',Icone:TrofeuIcon,Title:'Esportes'},
  {name:'Aprender',Icone:Aprender,Title:'Aprender'},
  ]
  const items4 = [
  {name:'Youtube Premium',Icone:YoutubeIcon,Title:'Youtube Premium'},
  {name:'Youtube Music',Icone:YoutubeMusic,Title:'Youtube Music'},
  {name:'Youtube Kids',Icone:YoutubeKids,Title:'Youtube Kids'},
  ]
  const items5 = [
  {name:'Configurações',Icone:ConfiguraçaoICon,Title:'Configurações'},
  {name:'Histórico de denúncias',Icone:DenunciaICon,Title:'Histórico de denúncias'},
  {name:'Ajuda',Icone:AjudaICon,Title:'Ajuda'},
  {name:'Enviar feedback',Icone:FeedbackICon,Title:'Enviar feedback'},
  ]
  const items6 = [
  {name:'Sobre',name2:'Imprensa'},
  {name:'Direitos autorais'},
  {name:'Entre em contato'},
  {name:'Criadores de conteúdo'},
  {name:'Publicidade',name2:'Desenvolvedores'},
  ]
  const items7 = [
  {name:'Termos',name2:'Privacidade'},
  {name:'Política e segurança'},
  {name:'Como funciona o YouTube'},
  {name:'Testar os novos recursos'},
  ]







interface IProps {
  openMenu: boolean,
  setOpenMenu: (openMenu: boolean) => void
}

function Menu2({ openMenu, setOpenMenu }: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenMenu(!openMenu);
  };

  const navegar = useNavigate();

  return (
    <>
      {openMenu && (
        <>
          {isMenuOpen && <Overlay />}
          <div style={{ position: 'relative', display: 'flex' }}>
            <div style={{ position: 'fixed', zIndex: 1000 }}>
              
              <Container2 openMenu={openMenu}>
              <LogoContainer2 openMenu={openMenu}>
                <ButtonContainer >
                  <ButtonIcon onClick={handleToggleMenu} alt="" src={HumburguerIcon} />
                </ButtonContainer>
                <img 
                  style={{ cursor: 'pointer', width: '100px' }}
                  alt=""
                  src={Logo}
                />
              </LogoContainer2>

              <MenuItem openMenu={openMenu} onClick={()=> navegar('/')} >
                <ButtonIcon alt="" src={Inicio}/>
                <span>Inicio</span>         
            </MenuItem>

              {items.map((item)=>(
            <MenuItem openMenu={openMenu}  >
                <ButtonIcon alt="" src={item.Icone}/>
                <span>{item.name}</span>         
            </MenuItem>
          ))}

           <Linha openMenu={openMenu}></Linha>
           
           <MenuItem openMenu={openMenu} >
                <ButtonIcon alt="" src={Biblioteca}/>
                <span title="Biblioteca">Biblioteca</span>         
            </MenuItem>
           
            {items2.map((item)=>(
                <MenuItem2 openMenu={openMenu} >
                <ButtonIcon alt="" src={item.Icone}/>
                <Title>  <span title={item.Title}>{item.name}</span></Title>       
            </MenuItem2>
            ))}

            <Linha openMenu={openMenu}></Linha>

            <Titulo openMenu={openMenu}>
                <span>Explorar</span>
            </Titulo>

            {items3.map((item)=>(
                <MenuItem2 openMenu={openMenu} >
                <ButtonIcon alt="" src={item.Icone}/>
                <Title>  <span title={item.Title}>{item.name}</span></Title>       
                </MenuItem2>
            ))}
             
            <Linha openMenu={openMenu}></Linha>                    

            <Titulo openMenu={openMenu}>
                <span>Mais do YouTube</span>
            </Titulo>

            {items4.map((item)=>(
                <MenuItem2 openMenu={openMenu} >
                <ButtonIcon alt="" src={item.Icone}/>
                <Title>  <span title={item.Title}>{item.name}</span></Title>       
                 </MenuItem2>
            ))}

            <Linha openMenu={openMenu}></Linha>

            {items5.map((item)=>(
                <MenuItem2 openMenu={openMenu} >
                <ButtonIcon alt="" src={item.Icone}/>
                <Title>  <span title={item.Title}>{item.name}</span></Title>       
               </MenuItem2>
            ))}

            <Linha openMenu={openMenu}></Linha>

            {items6.map((item)=> (
            <Menuitem3 openMenu={openMenu} >
               <span>{item.name}</span>
               <span className="span2">{item.name2}</span>
           </Menuitem3>
            ))}

              <Linha2 openMenu={openMenu}></Linha2>

              {items7.map((item)=>(
            <Menuitem4 openMenu={openMenu} >
               <span>{item.name}</span>
               <span className="span2">{item.name2}</span>
           </Menuitem4>
            ))}
            
             <Linha2 openMenu={openMenu}></Linha2>

            <Menuitem4 openMenu={openMenu}>
            <span className="span3" >© 2023 Google LLC</span>
            </Menuitem4>
              </Container2>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu2;

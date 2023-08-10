import {useContext, useState} from  'react'
import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer
    ,SearchInput, 
    SearchButton,
    HeaderButtons, 
    Apagarbutton, 
    Apagaricon, 
    ButtonLogin,  
    DropdownMenu, 
    ExitButton,
    ChanellButton,
    DropdownSpan,
    ButtonMenuDropdown,
    ButtonContainer2,
    LogoYT,
    OpenSearchButton,
    MicroIcon,
    CloseSearchButton,
    Overlay, 
}
 from "./styles"
import HumburguerIcon from '../../assets/hamburge.png'
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import Videoicon from '../../assets/video.png'
import NotificationICon from '../../assets/sino.png'
import Apagaricone from '../../assets/x.png'
import LoginICone from '../../assets/login-icone.png'
import CloseICon from '../../assets/saida.png'
import CanalICon from '../../assets/canal.png'
import BackIcon from '../../assets/voltar.png'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../../context/userContext'
import { useSearchContext } from '../../context/searchContext'

interface Iprops{
    openMenu:boolean,
    setOpenMenu:(openMenu:boolean)=>void
}


function Header({openMenu,setOpenMenu}:Iprops){

    const [limpar,setLimpar] = useState(Boolean);

    const {login,logOut,user} = useContext(UserContext);

    const {search,setSearch} = useSearchContext();

    const [valorinput,setValorinput] = useState('');

    const [openDropdown,setOpenDropdown] = useState(false)

    const [openSearchInput,setOPenSearchInput] = useState(false);

    const navigate = useNavigate();

    const OpenSearch = () =>{
        setOPenSearchInput(!openSearchInput)
    }

    const OpenMenuDropdown = () =>{
        setOpenDropdown(!openDropdown)
    }


    function receberinput (valorinput: string){
        setValorinput(valorinput)
        if(valorinput ===''){
            setLimpar(false)
        }else{
            setLimpar(true)
        }

    }

    const apagarescrita = ()=>{
        setValorinput('')
        setLimpar(false)
    }

    


    return(
    <Container>
        <LogoContainer>
            <ButtonContainer2 margin='10px 0 0 0'>
                <ButtonIcon onClick={()=> setOpenMenu(!openMenu)} alt="" src={HumburguerIcon}/>
            </ButtonContainer2>
            <LogoYT
                alt=""
                src={Logo}
            />
        </LogoContainer>

        <Overlay openSearchInput={openSearchInput} />

        <CloseSearchButton openSearchInput={openSearchInput}  onClick={() => OpenSearch()}>
            <ButtonIcon src={BackIcon}/>
        </CloseSearchButton>

        <SearchContainer openSearchInput={openSearchInput}>
            <SearchInputContainer>
                <SearchInput 
                value={valorinput}
                placeholder="Pesquisar" 
                onChange={(e)=> {
                    receberinput(e.target.value)
                }} 
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        setSearch(valorinput)
                        navigate('/search')
                    }

                }}
                />
                <Apagarbutton limpar={limpar} onClick={apagarescrita}>
                <Apagaricon
                limpar={limpar}
                alt=''
                src={Apagaricone}
                />
            </Apagarbutton>
            </SearchInputContainer>
            
            <SearchButton>
                <ButtonIcon
                 alt="" 
                 src={SearchIcon}
                 onClick={()=>{
                    if(valorinput === ''){
                        alert('digite  alguma coisa')
                    }{
                        setSearch(valorinput);
                        navigate('/search')
                    }
                 }}
                 />
            </SearchButton>
            <MicroIcon>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={MicIcon}/>
            </ButtonContainer>
            </MicroIcon>
        </SearchContainer>


        <OpenSearchButton onClick={() => OpenSearch()}>
            <ButtonIcon src={SearchIcon}/>
        </OpenSearchButton>

        <HeaderButtons >

            {login? 
            <>
            <ButtonContainer  margin='0 0 0 10px' >
                <ButtonIcon alt="" src={Videoicon}/>
            </ButtonContainer>
            <ButtonContainer margin='0 0 0 10px'>
            <ButtonIcon alt="" src={NotificationICon}/>
            </ButtonContainer>
            </>
            :
            ''
            
            }

            
            
            {login?
            
            <>
            
            <ButtonContainer2 onClick={() => OpenMenuDropdown()}>
            {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
            </ButtonContainer2>
            <DropdownMenu openDropdown={openDropdown} >  
                <ChanellButton>
                {user && user.nome ? user.nome.substring(0, user.nome.indexOf(' ')) : ''}
                </ChanellButton>
                <ChanellButton>
                    <ButtonMenuDropdown src={CanalICon} />
                    <DropdownSpan onClick={() => navigate('/postvideo')}>Seu Canal</DropdownSpan>
                </ChanellButton>
                <ExitButton>
                    <ButtonMenuDropdown src={CloseICon} />
                    <DropdownSpan onClick={() => logOut()}>Sair</DropdownSpan>
                </ExitButton>
            </DropdownMenu>
            </>

            :

            <ButtonLogin onClick={() => navigate ('/login')}>
                <ButtonMenuDropdown src={LoginICone} />
                <span>iniciar sessão</span>
            </ButtonLogin>
            
            }
            
        </HeaderButtons>

    </Container>
    )
}


export default Header
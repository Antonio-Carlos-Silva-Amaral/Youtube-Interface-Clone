import { useContext, useRef, useState } from "react";
import Menu2 from "../../components/menu2";
import Header from "../../components/Header/indes";
import MenuLateral from "../../components/Menu";
import { 
    Cadastro, 
    ContainerGerall, 
    ContainerPost, 
    TituloName,  
    ChannelImage, 
    ContainerChaneel, 
    ImageBanner, 
    TextContainer,
    Textcard, 
    Title, 
    TitleContainer,  
    ContainerDosVideos,
    ContainerExemplo,
    ContainerVideos,
    Overlay,
    CloseButton,
    TituloNamePost,
    ContainerInputPost,
    InputPost,
    Postar,
    MessageContent
} 
    from "./postvideos-styles";
import CsgoImage from "../../assets/csgo-ranks-how-to-rank-up.jpg"
import { UserContext } from "../../context/userContext";
import PostVideoComponent from "../../components/postVideoComponente";




function Postvideos (){

    const [openMenu, setOpenMenu] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [openMenuPost, setOpenMenuPost] = useState(false);

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [thumbnail,setThumbnail] = useState('');

    const [validThumbanail, setValidThumbanil] = useState(true);
    const [validTitle, setValidTitle] = useState(true);
    const [validDescription, setValidDescription] = useState(true);

    const thumbnailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
    setShowOverlay(!showOverlay);
  };

    const {user,userVideos,createVideos,token} = useContext(UserContext);

    const user_id = user.id
   
    interface Videos {
        title: string
        thumbnail: string
        description: string
      }


      const PostarVideo = () =>{
        if(thumbnail.trim() !== ''){
            setValidThumbanil(true)
        }
        if(title.trim() !== ''){
            setValidTitle(true)
        }
        if(description.trim() !== ''){
            setValidDescription(true)
        }
        if(thumbnail.trim() === '' && title.trim() === '' && description.trim() === ''){
            setValidThumbanil(false)
            setValidTitle(false)
            setValidDescription(false)
            if (thumbnailRef.current) {
                thumbnailRef.current.focus();
              }
        }else if(thumbnail.trim() === ''){
            setValidThumbanil(false)
            if(thumbnailRef.current){
                thumbnailRef.current.focus();
            }
        }else if(title.trim() === '' ){
            setValidTitle(false)
            if(titleRef.current){
                titleRef.current.focus()
            }
        }else if (description.trim() === ''){
            setValidDescription(false)
            if(descriptionRef.current){
                descriptionRef.current.focus()
            }
        }else{
            createVideos(token,user_id,title,description,thumbnail )
            setOpenMenuPost(false)
        }
      }

     

    return(
        <>
         <div style={{ position: 'relative', display: 'flex' }}>
       
            {openMenu && (
                 <div
                style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
            }}
                onClick={handleMenuToggle}
            />
            )}
            <div style={{ position: 'fixed', zIndex: 1001 }}>
         
                <Menu2 openMenu={openMenu} setOpenMenu={handleMenuToggle} />
            </div>
         </div> 
         
            <Header openMenu={openMenu} setOpenMenu={handleMenuToggle} />
            <MenuLateral  openMenu={openMenu}/>


            <ContainerGerall>

            <TituloName>
            {user && user.nome ? user.nome : ''}
            </TituloName>

            <Cadastro onClick={() => setOpenMenuPost(!openMenuPost)}>Criar Vídeo</Cadastro>

            <Overlay openMenuPost={openMenuPost}>
           
                <ContainerPost>
                    <TituloNamePost>Postar um novo video </TituloNamePost>
                    <ContainerInputPost>
                        <InputPost 
                        validar={validThumbanail}
                        ref={thumbnailRef}
                        placeholder="URL da Thumbnail ex: https://blogtectoy.com.br/sonic-the-hedgehog-2020-3.jpg"
                        onChange={(e)=> setThumbnail(e.target.value)}
                        />
                        <MessageContent>
                            {validThumbanail?
                            '':
                            'Cole a url da sua thumbnail'}
                        </MessageContent>
                        <InputPost 
                        ref={titleRef}
                        validar={validTitle}
                        placeholder="Título do Video"
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                         <MessageContent>
                            {validTitle?
                            '':
                            'Digite um titulo para seu video'}
                        </MessageContent>
                        <InputPost 
                        ref={descriptionRef}
                        validar={validDescription}
                        placeholder="Descrição do vídeo"
                        onChange={(e)=> setDescription(e.target.value)}
                        />
                        <MessageContent >
                            {validTitle?
                            '':
                            'Digite uma descrição para seu video'}
                        </MessageContent>
                    </ContainerInputPost>
                    <Postar onClick={() => PostarVideo()}>Postar Vídeo</Postar>
                    <CloseButton onClick={() => setOpenMenuPost(!openMenuPost)} >
                              Close
                    </CloseButton>
                </ContainerPost>
            </Overlay>
            

            <ContainerVideos>
            <ContainerDosVideos>
            
        
            <ContainerExemplo>
                <ImageBanner src={CsgoImage}/>
                <TitleContainer>
                    <ContainerChaneel>
                        <ChannelImage>
                        E
                        </ChannelImage>
                    </ContainerChaneel>
                    <TextContainer>
                     <Title>CSGO Ranks 2023</Title>
                     <Textcard>Exemplo</Textcard>
                    </TextContainer>
                </TitleContainer>
            </ContainerExemplo>

            
            
        {Array.isArray(userVideos) ? (
            userVideos.map((videos: Videos) => 
            <PostVideoComponent
            channelimage={user && user.nome ? user.nome.charAt(0).toUpperCase() : ''} 
            thumbnail={videos.thumbnail}
            title={videos.title}
            description={videos.description}
        />)) 
         :
        (
          <h1>Esse canal não possui vídeos</h1>
        )}
                
            


            </ContainerDosVideos>
            </ContainerVideos>
    

            </ContainerGerall>
        



        </>
    )
}


export default Postvideos;
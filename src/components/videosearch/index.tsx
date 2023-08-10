import { 
    ChannelImage,
     Container, 
     ContainerBanner, 
     ContainerChaneel,  
     Containerescrita,  
     DescriptionContainer,  
     ImageBanner, 
     TextContainer,
     Textcard, 
     Textcard2, 
     Title, 
     TitleContainer 
    }
     from "./styles";


interface Propss {
    thumbnail: string;
    title:string;
    channelTitle: string;
    details:string;
    description:string;
    channelImage:string;
}

function VideoComponent2 (props: Propss){
    return(
      <Container>
            <ContainerBanner>
                <ImageBanner src={props.thumbnail}/>
            </ContainerBanner>
            <Containerescrita>    
            <TitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <Textcard>{props.details}</Textcard>
                </TextContainer>
                <ContainerChaneel>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <Textcard2>{props.channelTitle}</Textcard2>
                </ContainerChaneel>
                <DescriptionContainer>
                    <Textcard>{props.description}</Textcard>
                </DescriptionContainer>
            </TitleContainer>
            </Containerescrita>
      </Container>
    )
}


export default VideoComponent2;
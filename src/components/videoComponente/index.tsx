import axios from "axios";
import { 
    ChannelImage,
     Container, 
     ContainerChaneel, 
     ImageBanner, 
     TextContainer,
     Textcard, 
     Title, 
     TitleContainer 
    }
     from "./style";


interface Propss {
    thumbnail: string;
    title:string;
    channelTitle: string;
    viewCount: string;
    channelImage:string;
    
}

function VideoComponent (props: Propss){
    return(
      <Container>
            <ImageBanner src={props.thumbnail}/>
            <TitleContainer>
                <ContainerChaneel>
                <ChannelImage>
                {props.channelImage}
                </ChannelImage>
                </ContainerChaneel>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <Textcard>{props.channelTitle}</Textcard>
                    <Textcard>{props.viewCount} </Textcard>
                </TextContainer>
            </TitleContainer>
      </Container>
    )
}


export default VideoComponent;
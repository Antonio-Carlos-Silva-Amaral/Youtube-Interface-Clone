import {  
  ChannelImage, 
  Container, 
  ImageBanner, 
  TextContainer, 
  Textcard, 
  Title, 
  TitleContainer 
} 
from "./postVideoComonent-style";

interface Props {
  title: string
  thumbnail: string
  description: string
  channelimage:string
}

function PostVideoComponent(props: Props) {

  return (
    <Container>
      <ImageBanner alt="thumbnail" src={props.thumbnail}/>
      <TitleContainer>
        <ChannelImage>
          {props.channelimage}
        </ChannelImage>
        <TextContainer>
          <Title>{props.title}</Title>
          <Textcard>{props.description}</Textcard>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
}

export default PostVideoComponent;
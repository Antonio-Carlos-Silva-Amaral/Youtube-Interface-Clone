import axios from "axios";
import { useState, useEffect } from 'react';
import VideoComponent from "../../components/videoComponente";
import { Container} from "./styles";
import moment from "moment";
import { useCategoryContext } from "../../context/searchCategories";
import CategoryBar from "../../components/categoryBar/category-bar";
import Menu2 from "../../components/menu2";
import Header from "../../components/Header/indes";
import MenuLateral from "../../components/Menu";




function Home (){

  interface Videos {
    id: string;
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
        maxres: {
          url: string;
        }
      }
      channelTitle: string;
      publishedAt: string;
    },
    statistics: {
      viewCount: string;
    }
  }

  const [openMenu, setOpenMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
    setShowOverlay(!showOverlay);
  };



  const [videos, setVideos] = useState<Videos[]>([]);
  const {categoryId} = useCategoryContext();


  useEffect(() =>{
    fechVideos();
  },[categoryId]);

  const chave = 'AIzaSyDdY4D_tKSlJ0FaE61ZEKCLiTsMb2wNbUc'

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${chave}`

  async function fechVideos() {
    try{
      const response = await axios.get(url);
     setVideos(response.data.items)
     console.log(response.data.items)
    } catch(error){
      console.log(error)
    }
  }
 

  function formatViews(viewCount: number): string {
    if(viewCount >= 1000000){
      return `${(viewCount / 1000000).toFixed(0)} mi visualizações`
    } else if(viewCount >= 1000){
      return `${(viewCount / 1000).toFixed(0)} mil visualizações`
    } else {
      return `${viewCount} visualizações`
    }
  }




  function dataPublicação(publishedAt: string) {
    const now = moment().startOf('day'); // Considerar apenas o início do dia atual
    const publishedDate = moment(publishedAt).startOf('day'); // Considerar apenas o início do dia da data de publicação
    const diffDays = now.diff(publishedDate, 'days');

    if (diffDays <= 0) {
      return 'hoje';
    } else if (diffDays === 1) {
      return 'há 1 dia';
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return 'há 1 semana';
      } else {
        return `há ${diffWeeks} semanas`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return 'há 1 mês';
      } else {
        return `há ${diffMonths} meses`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return 'há 1 ano';
      } else {
        return `há ${diffYears} anos`;
      }
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
        
      <CategoryBar/>

     <Container>
     {videos.map((video)=>(
       <VideoComponent 
       viewCount={`${formatViews(Number(video.statistics.viewCount))} - ${dataPublicação(video.snippet.publishedAt)} `}
       channelTitle={video.snippet.channelTitle}
       title={video.snippet.title}
       thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
       channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
       key={video.id}
       />

     ))}
     </Container>
     
     </>  
    )
}

export default Home;
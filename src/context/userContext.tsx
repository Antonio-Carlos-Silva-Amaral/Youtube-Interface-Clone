import { createContext, useEffect, useState} from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children} : any) =>{
    const [login,setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [userVideos,setUserVideos] = useState({});
    
    const navegar = useNavigate();
  
    

    const createVideos = (token:string,user_id:string,title:string,description:string,thumbnail:string) =>{
        api.post('/video/create-video', {user_id, title, description, thumbnail,}, {headers: {Authorization: token}})
        .then(()=>{
            alert('Video criado com sucesso')
            alert('Recarregue a página')
             
        }).catch(()=>{
            alert('Não foi possível criar o vídeo')
        })
    }

    const getVideos = (token:string,user_id:string) =>{
        api.get(`/video/get-videos?user_id=${user_id}`, {headers : {Authorization:token}})
        .then(({data})=>{
            setUserVideos(data.videos)
        }).catch(()=>{
            alert('nao deu pra pegar os videos ')
        })
    }

    

    const getUser = (token: string) =>{
        api.get('/users/get-user',{headers:{Authorization:token}}).then(({data})=>{
            setUser(data.user)
            setLogin(true);
            getVideos(token, data.user.id);
        }).catch((error)=>{
            console.log('Usuário não authenticado',error)
        })
    }


    useEffect(()=>{
        getUser(token);
    },[token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }



    const handleLogin = (email:string, password:string) =>{
        api.post('/users/sign-in',{email,password}).then(({data})=>{
            setLogin(true);
            localStorage.setItem('token',data.token);
            setToken(data.token)
            getUser(data.token);
            navegar('/')
    }).catch ((error) =>{
        console.log('Não foi possivel fazer login',error)
        alert('Usuário ou senha incorretos. Verifique os dados  e tente novamente')
    })
    }


        const handleCreateUsers = (name: string, email: string, password: string) => {
            api.post('/users/sign-up', { name, email, password })
              .then((response) => {
                if (response.status === 200) {
                  alert('Usuário criado com sucesso');
                  handleLogin(email, password);
                  navegar('/');
                } 
              })
              .catch((error) => {
                if (error.response && error.response.status === 409) {
                  alert('E-mail já cadastrado');
                } else {
                  alert('Não foi possível criar novo usuário');
                }
              });
          };
    

    return(
        <UserContext.Provider value={{
            login,
            user,
            token,
            userVideos,
            handleLogin,
            logOut,
            handleCreateUsers,
            createVideos,
            getVideos,
            
        }}>
            {children}

        </UserContext.Provider>
    )
}

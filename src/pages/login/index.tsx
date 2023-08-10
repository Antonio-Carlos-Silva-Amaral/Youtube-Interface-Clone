import {useContext, useState, useRef} from 'react'
import { UserContext } from '../../context/userContext';
import { 
  Buttonlogin2, 
  ConatinerInput, 
  ContainerGeral, 
  Container, 
  ContainerButtons, 
  CriarConta, 
  GoogleLogo, 
  Inputcamp, 
  Inputmessagee, 
  Titulo1, 
  Titulo2, 
  TituloContainer 
} 
from './login-style';
import GoogleICon from '../../assets/googleicone.png'
import { useNavigate } from 'react-router-dom';
import { CheckBoxContainer,  MessageContent } from '../createuser/createuser-style';

function Login (){


    const [showPassword,setShowPassword] = useState(false);

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    const { handleLogin} = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [validEmail, setValidEmail] = useState(true)

    const [formatEmailValid, setFormatEmailValid] = useState(true)

    const [validPassword, setValidPassword] = useState(true)

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);




    const navigate = useNavigate()
    

    const Logar = () =>{
        if(email.trim() !== ''){
            setValidEmail(true)
        }
        if(password.trim() !== ''){
            setValidPassword(true)
        }
        if (email.trim() === '' && password.trim() === '') {
            setValidEmail(false)
            setValidPassword(false)
            if (emailRef.current) {
              emailRef.current.focus()
            }
          }
          else if (!/\S+@\S+\.\S+/.test(email)){
            setFormatEmailValid(false)
            setValidEmail(false)
            if(emailRef.current){
                emailRef.current.focus
            }
          } else if(password.trim() === '' || password.length < 8){
            setValidPassword(false)
            if(passwordRef.current){
                passwordRef.current.focus
            }
          }else{
            handleLogin(email,password)
          }
    }

    return(
        <ContainerGeral>
        <Container>
         <TituloContainer>
            <GoogleLogo  alt='' src={GoogleICon}/>
            <Titulo1 >Inicie sessão</Titulo1>
            <Titulo2 >Continuar para o YouTube</Titulo2>
         </TituloContainer>

         <ConatinerInput>

         <Inputcamp 
         type='email' 
         value={email} 
         onChange={(e) => setEmail(e.target.value)} 
         onKeyDown={(e)=>{
          if(e.key === 'Enter') {
            Logar()
          }
         }}
         placeholder='Digite seu endereço de email' 
         ref={emailRef}
         validar={validEmail}
         />
         <MessageContent>
            <Inputmessagee validar={validEmail}>
                {formatEmailValid?
                'Digite seu email'
                :
                'O formato desse e-mail é inválido. Digite um e-mail válido.'}
            </Inputmessagee>
         </MessageContent>

         <Inputcamp 
         type={showPassword? 'text' : 'password'} 
         value={password} 
         onChange={(e) => setPassword(e.target.value)} 
         onKeyDown={(e) => {
          if(e.key === 'Enter') {
            Logar()
          }
          if (e.key === " ") {
            e.preventDefault();
          }
        }}
         placeholder='Digite sua senha' 
         ref={passwordRef}
         validar={validPassword}
         />
         <MessageContent>
            {validPassword?
            ''
            :
            'Digite sua senha'
            }
         </MessageContent>

         <CheckBoxContainer>
            <input type='checkbox' checked={showPassword} id='check-input' onChange={handleShowPassword} />
            <label htmlFor='check-input'>Mostrar senha</label>
         </CheckBoxContainer>
         </ConatinerInput>

        <ContainerButtons>
         <CriarConta onClick={() => navigate('/createuser')}>Criar conta</CriarConta>
         <Buttonlogin2 onClick={() => Logar()}> Seguinte</Buttonlogin2>
        </ContainerButtons>
    
        </Container>  
        </ContainerGeral>
    )
}


export default Login
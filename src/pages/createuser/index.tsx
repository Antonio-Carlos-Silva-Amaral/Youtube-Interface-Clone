import {useContext, useRef, useState} from 'react'

import { 
    Buttonlogin2, 
    CheckBoxContainer, 
    ComparePassword, 
    ConatinerInput, 
    ContainerGeral, 
    Container, 
    ContainerButtons, 
    ContainerPassword, 
    CriarConta, 
    GoogleLogo, 
    InputPassword, 
    Inputcamp, 
    Inputmessage, 
    MessageContent, 
    Titulo1, 
    Titulo2, 
    TituloContainer 
} 
from './createuser-style';
import GoogleICon from '../../assets/googleicone.png'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function CriarUsuarios (){

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }


    const {handleCreateUsers} = useContext(UserContext)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [comparePassword, setComparePassword] = useState('')
    const [NameValid, setNameValid] = useState(true)
    const [EmailValid, setEmailValid] = useState(true)
    const [PasswordValid, setPasswordValid] = useState(true)

    const [formatEmailValid, setFormatEmailValid] = useState(true)
    const [samePassword, setSamePassword] = useState(true)


    const nameRef =  useRef<HTMLInputElement>(null)
    const emailRef =  useRef<HTMLInputElement>(null)
    const passwordRef =  useRef<HTMLInputElement>(null)
    const comparePasswordRef =  useRef<HTMLInputElement>(null)


    const navigate = useNavigate()



    const creatUser = () =>{
        if(name.trim() !== ''){
            setNameValid(true);
        }
        if(email.trim() !== ''){
            setEmailValid(true);
        }
        if(password.trim() !== '' && comparePassword !== ('')){
            setPasswordValid(true);
        }
        if(name.trim() === '' && email.trim() ==='' && password.trim() ==''){
            setNameValid(false);
            setEmailValid(false);
            setPasswordValid(false);
            if(nameRef.current){
                nameRef.current.focus();
            }
        }else if(name.trim() === ''){
            setNameValid(false);
            if(nameRef.current){
                nameRef.current.focus();
            }
        }else if(email.trim() === ''){
            setEmailValid(false);
            setFormatEmailValid(true);
            if(emailRef.current){
                emailRef.current.focus();
            }
        } else if (!/\S+@\S+\.\S+/.test(email)){
            setFormatEmailValid(false);
            setEmailValid(false);
            if (emailRef.current){
                emailRef.current.focus();
            }
        }else if(password.trim() === '' || password.length < 8){
            setPasswordValid(false)
            if(passwordRef.current){
                passwordRef.current.focus();
            }
        }  else if (comparePassword.trim() === '') {
            setPasswordValid(false)
            if (comparePasswordRef.current) {
              comparePasswordRef.current.focus()
            }
          }else if(password !== comparePassword){
            setPasswordValid(false);
            setSamePassword(false)
            if (comparePasswordRef.current) {
                comparePasswordRef.current.focus()
              }
          }else{
            handleCreateUsers(name,email,password)
          }
    }
   
    
    return(
        <ContainerGeral>
        <Container>
         <TituloContainer>
            <GoogleLogo  alt='' src={GoogleICon}/>
            <Titulo1 >Crie uma conta neste projeto</Titulo1>
            <Titulo2 >Continuar para o YouTube</Titulo2>
         </TituloContainer>

         <ConatinerInput>
         <Inputcamp 
         type='name'
         validar={NameValid} 
         value={name} 
         onChange={(e)=> setName(e.target.value)} 
         ref={nameRef} 
         placeholder='Nome Sobrenome '
         />
        {NameValid? ''
        : 
        <MessageContent>
        <span>Digite seu nome</span>
        </MessageContent>
        }

         <Inputcamp 
         type='email' 
         validar={EmailValid} 
         value={email} 
         onChange={(e)=> setEmail(e.target.value)} 
         ref={emailRef} 
         placeholder='Seu endereço de email'
         />
       <MessageContent>
        <Inputmessage validar={EmailValid}>
            {formatEmailValid? 
            'Digite seu e-mail.' 
            : 
            'O formato desse e-mail é inválido. Digite um e-mail válido.'
            }
         </Inputmessage>
        </MessageContent>
         <ContainerPassword>
         <InputPassword 
         type={showPassword? 'text' : 'password'} 
         validar={PasswordValid} value={password} 
         onChange={(e)=> setPassword(e.target.value)} 
         onKeyDown={(e)=>{
            if(e.key === ''){
                e.preventDefault()
            }
            if(e.key === 'Enter'){
                creatUser()
            }
         }}
         ref={passwordRef}  placeholder='Senha' 
         maxLength={8}
         />

         <ComparePassword 
         type={showPassword? 'text' : 'password'} 
         validar={PasswordValid} 
         value={comparePassword} 
         onChange={(e)=> setComparePassword(e.target.value)} 
         onKeyDown={(e)=>{
            if(e.key === ''){
                e.preventDefault()
            }
            if(e.key === 'Enter'){
                creatUser()
            }
         }}
         ref={comparePasswordRef}  
         placeholder='Confirmar' 
         maxLength={8}
         />
         </ContainerPassword>

        <MessageContent>
            <Inputmessage validar={PasswordValid}>
            {samePassword?
              'Digite uma senha de pelo menos 8 caracteres e confirme.'
              :
              'Senha inválida. Verifique se estão iguais.'}
            </Inputmessage>
        </MessageContent>
        
         <CheckBoxContainer>
            <input type='checkbox' checked={showPassword} onChange={handleShowPassword} id='check-input'/>
            <label htmlFor='check-input'>Mostrar senha</label>
         </CheckBoxContainer>
         </ConatinerInput>
         
        <ContainerButtons>
         <CriarConta onClick={() => navigate('/login')}>Já possui uma conta</CriarConta>
         <Buttonlogin2 onClick={() => creatUser()}> Seguinte</Buttonlogin2>
        </ContainerButtons>
    
        </Container>  
        </ContainerGeral>
    )
}


export default CriarUsuarios
import { useState } from "react";
import InputAltenticacao from "../components/auth/InputAutenticacao";
import styled from 'styled-components';
// import { FcGoogle } from 'react-icons'
import Image from 'next/image'
import useAuth from "../data/hooks/UseAuth";
import { setDefaultResultOrder } from "dns";


const Container = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    section{
        border-radius:30px;
        width:40% ;
        margin: 50px ;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.8);
    div{
    display: flex ;
    flex-direction: column ;
    height: 50vh ;
    width:50vh ;
    margin: 0 auto ;
    h1{
        margin-bottom: 30px ;
        text-align: center ;
        }
    button{
        width: 100%;
        padding: 10px ;
        color: white ;
        background: #5958EB;
        font-weight:bold ;
        border-radius: 5px ;
        cursor: pointer;
        border: none;
        

    }
    .button2{
        background: #F53B42;
        cursor: pointer;
        margin-bottom: 20px ;
    }
    label{
        font-weight: bold ;
    }

    input{
        background: #f1f0f0;
        border-radius: 5px ;
        border:1px solid #cecece ;
        padding: 5px 3px;
    }

    a{
        color: blue;
        cursor: pointer;

        &:hover{
            text-decoration: underline ;
        }
    }
}
}
`;

export default function Autenticacao(){
    const {cadastrar, login, loginGoogle} = useAuth()

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    async function submeter(){
        try{
            if(modo === 'login'){
              await login(email, senha)
            }else{
               await cadastrar(email, senha)
            }
        }catch(e){
            alert('Esse usuário não existe')
        }
        
    }

    return(
        <Container>
                <Image
                 src="/imgs/capaLogin.png" alt="Capa Login" 
                 width={1000}
                 height={750}/>
                <section>
                <div>
                <h1>{modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}</h1>
                <InputAltenticacao
                label="Email"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
                />
                <InputAltenticacao
                label="senha"
                tipo="password"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio
                />

                <button onClick={submeter}>{modo === 'login' ? 'Entrar' : 'Cadastrar'}</button>
                <hr/>
                <button onClick={loginGoogle} className="button2"> Entrar com o google </button>

                {modo === 'login' ? (
                    <p>Ainda não é cadastrado? <a onClick={()=> setModo('cadastro')}>
                        Crie uma conta
                        </a></p>
                ) : (
                    <p>Já é cadastrado? <a onClick={()=> setModo('login')}>
                    Faça login com sua conta
                    </a></p>
                )}
            </div>
            </section>
        </Container>
    )
}

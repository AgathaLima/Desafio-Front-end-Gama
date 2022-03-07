import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import firebase from '../Firebase/config'
import Usuario from '../model/Usuario'
import { isGeneratorObject } from 'util/types'

interface AuthContexProps{
    usuario?: Usuario
    carregando?: boolean,
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?:(email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext= createContext<AuthContexProps>({})
async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()
    return{
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL


    }
}

function gerenciarCookie(logado: boolean){
    if(logado) {
        Cookies.set('adm-prova-gama', logado,{
            expires: 7
        })
    } else {
        Cookies.remove('adm-prova-gama')
    }
}

export function AuthProvider(props){
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)

    async function configurarsessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario =  await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function cadastrar(email, senha){
        try{
            setCarregando(true)
            const res = await firebase.auth().createUserWithEmailAndPassword(email, senha)


           await configurarsessao(res.user)
            route.push('/')
        } finally{
            setCarregando(false)
        }
    }

    
    async function login(email, senha){
        try{
            setCarregando(true)
            const res = await firebase.auth().signInWithEmailAndPassword(email, senha)


            await configurarsessao(res.user)
            route.push('/')
        } finally{
            setCarregando(false)
        }
    }


    async function loginGoogle(){
        try{
            setCarregando(true)
            const res = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            await configurarsessao(res.user)
            route.push('/')
        } finally{
            setCarregando(false)
        }
    }

    async function logout(){
        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarsessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() =>{
        if(Cookies.get('adm-prova-gama')){
            const cancelar = firebase.auth().onIdTokenChanged(configurarsessao)
            return () => cancelar()
        }else{
            setCarregando(false)
        }
    },[])
 
    return(
     <AuthContext.Provider value={{
            usuario,
            carregando,
            cadastrar,
            login,
            loginGoogle,
            logout
     }}>
         {props.children}
    </AuthContext.Provider>
 )
}


export default AuthContext
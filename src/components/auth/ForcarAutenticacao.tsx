import Head from 'next/head'
import route from "next/router"
import useAuth from "../../data/hooks/UseAuth"

export default function ForcarAutenticacao(props){

    const { usuario, carregando} = useAuth()

    function rederizarConteudo(){
        return(
                <>
                    <Head>
                        <script dangerouslySetInnerHTML={{
                            __html:`
                                if(!document.cookie?.includes("adm-prova-gama")){
                                    window.location.href= "/autenticacao"
                                }
                            `
                        }} />
                    </Head>
                    {props.children}
                </>
            )
    }

    function renderizarCarregando(){
        return(
            <div><small>Loading...</small></div>
        )
    }

   if(!carregando && usuario?.email){
       return rederizarConteudo()
   } else if (carregando){
       return renderizarCarregando()
   } else{
       route.push('/autenticacao')
        return null
   }
   
}
import MenuLateral from '../ManuLateral'
import Cabecalho from '../Cabecalho'
import Conteudo from '../Conteudo'
import { Container } from './styles'
import ForcarAutenticacao from '../../auth/ForcarAutenticacao'
import Image from 'next/image'
interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
} 

export default function Layout(props: LayoutProps){
    return(
        <ForcarAutenticacao>
        <Container>
            <div className='menu'>
            <MenuLateral />
            </div>
            <div className='layout'>
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>
                {props.children}
            </Conteudo>
            </div>
        </Container>
        </ForcarAutenticacao>
    )
}
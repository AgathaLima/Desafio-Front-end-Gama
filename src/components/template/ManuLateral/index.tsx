
import Link from 'next/link'
import { IoHomeOutline, IoReaderSharp, IoNewspaperOutline, IoReceiptSharp, IoExitOutline } from 'react-icons/io5'
import useAuth from '../../../data/hooks/UseAuth'
import { Container } from './style'

export default function MenuLateral(){

    const {logout} = useAuth()
    return(

            <Container>
                <ul>
                <Link href="/">
                    <a className='logo'> <img src="https://media.glassdoor.com/sqll/2489392/gama-academy-squarelogo-1576594992317.png" alt="" /> </a>
                </Link>
                <Link href="/">
                    <a><IoHomeOutline /> <small>Home</small></a>
                </Link>
                <Link href="/provas">
                    <a><IoReaderSharp /> <small>Cadastrar Prova</small></a>
                </Link>
                <Link href="/questoes">
                    <a><IoNewspaperOutline /> <small>Cadastrar Questões</small></a>
                </Link>
                <Link href="/alternativas">
                    <a><IoReceiptSharp /> <small>Cadastrar Alternativas</small></a>
                </Link>
                </ul>
                <div onClick={logout}>
                    <IoExitOutline/>
                    <h3>Sair</h3>
                </div>
            </Container>
            
    )
}
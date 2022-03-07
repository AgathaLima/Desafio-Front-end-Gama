import { Container } from "./style"

interface TituloProps {
    titulo: string
    subtitulo: string
} 

export default function MenuLateral(props: TituloProps){
    return(
        <Container>
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
        </Container>
    )
}
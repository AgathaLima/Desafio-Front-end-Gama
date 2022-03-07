import {Container} from './style'

interface InputAltenticacao{
    label: string
    tipo?: 'text' | 'email' | 'password'
    valor: any
    obrigatorio?: boolean
    valorMudou: (novoValor: any) => void
}

export default function InputAltenticacao(props: InputAltenticacao){
    return(
        <Container>
            <label htmlFor="">{props.label}</label>
            <input type={props.tipo ?? 'text'} value={props.valor} onChange={e => props.valorMudou?.(e.target.value)}
            required={props.obrigatorio}/>
        </Container>
    )
}
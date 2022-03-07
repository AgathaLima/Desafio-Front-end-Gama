interface ConteudoProps {
    children?: any
} 

export default function MenuLateral(props: ConteudoProps){
    return(
        <div>
            {props.children}
        </div>
    )
}
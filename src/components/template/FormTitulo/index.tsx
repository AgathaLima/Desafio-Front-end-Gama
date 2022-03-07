import { useState } from "react";
import { Container } from "./style";
import axios from "axios";

export default function FormTitulo(){

    const [title, setTitle] = useState([])

    function enviarTitulo(){
        axios.post('http://localhost:3000/exams',{
            title
        })
    }
    console.log(title)
    return(
        <Container>
            <div>
            <label htmlFor="inputTitulo" >Título:</label>
            <input id="inputTitulo" 
             placeholder="   Escreva o título aqui" onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={enviarTitulo}>Submit</button>
            </div>
        </Container>
         
        
    )
}
import { useState, useEffect } from 
"react";
import axios from "axios";
import { Container } from "./style";

export default function TabelaAlternativas(){
    const [alternatives, setAlternatives] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/alternatives')
        .then(({data})=>{
            setAlternatives(data)
        })
        .catch(erro => console.log(erro))
    
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function pegarDados(){
        axios.get('http://localhost:3000/alternatives')
        .then(({data})=>{
            setAlternatives(data.id)
        })
    }  

    const onDelete = (id)=>{
        axios.delete(`http://localhost:3000/alternatives/${id}`)
        .then(()=>{
            pegarDados()
            location.reload()
        })
    }

    return(
    <Container>
    <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Id da questão</th>
            <th>Alternativas</th>
            <th>Está correta?</th>
            <th>Apagar</th>
            </tr>
        </thead>
        <tbody>
        
        {alternatives?.map((alt)=>(
                <>
                    <tr>
                    <th key={alt.id}>{alt.id}</th>
                    <td>{alt.questionId}</td>  
                    <td>{alt.description}</td> 
                    <td>{alt.isCorrect === true ? "Correta" : "Incorreta"}</td> 
                    <td><button onClick={()=> onDelete(alt.id)}>x</button></td>
                    </tr>
                </> 
                
            ))}
        
        </tbody>

    </table>
    </Container>
    
    )
}
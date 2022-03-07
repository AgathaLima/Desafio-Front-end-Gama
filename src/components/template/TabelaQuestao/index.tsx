import { useState, useEffect } from 
"react";
import axios from "axios";
import { Container } from "./style";
import Link from "next/link";

export function TableQuestao(){
    const [questions, setQuestions] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/questions')
        .then(({data})=>{
            setQuestions(data)
        })
        .catch(erro => console.log(erro))
    
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function pegarDados(){
        axios.get('http://localhost:3000/questions')
        .then(({data})=>{
            setQuestions(data.id)
        })
    }  

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3000/questions/${id}`)
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
            <th>Id da prova</th>
            <th>Nº da Questão</th>
            <th>Descriçao</th>
            <th>Apagar</th>
            </tr>
        </thead>
        <tbody>
        
        {questions?.map((questao)=>(
                <>
                    <tr>
                    <th key={questao.id}>{questao.id}</th>
                    <td>{questao.examId}</td>  
                    <td>{questao.orderNumber}</td> 
                    <td>{questao.description}</td> 
                    <td><button onClick={()=> handleDelete(questao.id)} >x</button></td>
                    </tr>
                </> 
                
            ))}
        
        </tbody>

    </table>
    <Link href="/alternativas">
            <button className="cadQuestao" >Ir para cadastro de Alternativas</button>
    </Link>
    </Container>
    
    )
}
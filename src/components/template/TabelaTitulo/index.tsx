import { Container } from "./style";
import { useState, useEffect } from 
"react";
import axios from "axios";
import { title } from "process";
import FormTitulo from "../FormTitulo";
import Link from "next/link";

export function TableTitulo(){
    const [exams, setExams] = useState([])
    // const [prova, setProva] = useState ([])
    useEffect(()=>{
        axios.get('http://localhost:3000/exams')
        .then(({data})=>{
            setExams(data)
        })
        .catch(erro => console.log(erro))

        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    function pegarDados(){
        axios.get('http://localhost:3000/exams')
        .then(({data})=>{
            setExams(data.id)
        })
    }  

    const onDelete = (id)=>{
        axios.delete(`http://localhost:3000/exams/${id}`)
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
            <th> <h2>Id</h2> </th>
            <th><h2>Título</h2></th>
            <th><h2>Exluir</h2></th>
            </tr>
        </thead>
        <tbody>
            
        {exams?.map((titulo)=>(
                <>
                    <tr>
                    <th key={titulo.id}>{titulo.id}</th>
                    <td>{titulo.title}</td> 
                    <td> <button type="submit" onClick={()=> onDelete(titulo.id)}>x</button></td>
                    </tr>
                </>
            ))}
            
        </tbody>
        </table>
        <Link href="/questoes">
            <button className="cadQuestao" >Ir para cadastro de questões</button>
        </Link>
        
        </Container>
    )
}
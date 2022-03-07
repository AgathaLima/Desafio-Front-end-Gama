import { useEffect, useState } from "react";
import { Container } from "./style";
import axios from "axios";
import { TableQuestao } from "../TabelaQuestao";



export function FormQuestao(){
    const [description, setDescription] = useState('')
    const [ orderNumber, setOrderNumber] = useState('')
    const [examId, setExamId] = useState ('')
    const [exams, setExams] = useState([])

    function enviarQuestao(){
        axios.post('http://localhost:3000/questions',{
            examId,
            description,
            orderNumber
        })
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/exams')
        .then(({data})=>{
            setExams(data)
        })
        .catch(erro => console.log(erro))
    
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <>
        <Container>
            <div>
            <label htmlFor="inputIdQuestao" >Questão:</label>
            <input id="inputIdQestao" className="numeroQuestao" placeholder="  Nº da questão" onChange={(e)=>setOrderNumber(e.target.value)}/>
            <input id="inputTitulo" placeholder="  Adicione uma questão por vez" onChange={(e)=>setDescription(e.target.value)}/>
            <select name="" id="" onChange={(e)=>setExamId(e.target.options[e.target.selectedIndex].value)}>
            <option>Selecione uma prova</option>
                {exams.map((titulo)=>(
                    <option value={titulo.id} key={titulo.id}>{titulo.id}</option>
                ))}
            </select>
            <button onClick={enviarQuestao}>Submit</button>
            </div>
        </Container>
        <TableQuestao />
        </>
        
    )
}
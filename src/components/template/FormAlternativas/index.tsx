import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./style";
import TabelaAlternativas from "../TabelaAlternativa";

export default function FormAlternativas(){
    const [description, setDescription] = useState('')
    const [ isCorrect, setIsCorrect] = useState('')
    const [questionId, setQuestionId] = useState ('')
    const [questions, setQuestions] = useState ([])

    function enviarAlternativa(){
        axios.post('http://localhost:3000/alternatives',{
            questionId,
            description,
            isCorrect
        })
    }
    console.log(isCorrect)
    useEffect(()=>{
        axios.get('http://localhost:3000/questions')
        .then(({data})=>{
            setQuestions(data)
        })
        .catch(erro => console.log(erro))
    
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function functionIsCorrect(e){
        const valor = e.target.options[e.target.selectedIndex].text
        if( valor === "Sim"){
            setIsCorrect(true)
        }else{
            setIsCorrect(false)
        }
    }

    return(
        <>
        <Container>
            <div>
            <label htmlFor="inputAlternativa" >Alternativas:</label>
            <input id="inputAlternativa" placeholder="  Adicione uma alternativa por vez" onChange={(e)=>setDescription(e.target.value)}/> 
            <select name="" id="" onChange={(e)=>setQuestionId(e.target.options[e.target.selectedIndex].value)}>
            <option>Selecione o ID da questão</option>
                {questions.map((ids)=>(
                    <option value={ids.id} key={ids.id}>{ids.id}</option>
                ))}
            </select>
            <select name="" id="" onChange={functionIsCorrect}>
            <option>Está correta?</option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
            </select>
            <button onClick={enviarAlternativa}>Submit</button>
            </div>          
        </Container> 
        <TabelaAlternativas />
        </>  
    )
}
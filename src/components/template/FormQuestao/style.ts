import styled from 'styled-components'

export const Container = styled.form`
    width: 90%;
    text-align: center;
    align-items: center;
    margin: 0 auto 50px auto;
    
    div{
    width: 90%;
    height: 200px;
    margin: 50px;
    display: flex;
    margin: 0 auto ;
    align-items: center;

    label {
        font-size: larger;
        font-weight: bolder;
        margin: 10px 0 0 10px;

    }

    input {
        width: 60%;
        height: 40px;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px gray;
    }

    .numeroQuestao{
        width: 12% ;
    }

    button{
        width: 15%;
        height: 30px;
        margin: 10px;
        border-radius: 10px;
        background: greenyellow;
        box-shadow: 1px 1px 1px 1px gray;

        transition: .50s;

        &:hover{
            background: purple;
            color: white;
        }

    }

    .cadQuestao{
        background: purple;
        width: 30%;
        height: 40px;
        color: white;
        

        &:hover{
            background-color: greenyellow;
            color: black;
        }
    }
    
    select{
        width: 25%;
        height: 30px;
        border-radius: 5px;
    }


    }

`;

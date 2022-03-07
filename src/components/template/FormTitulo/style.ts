import styled from 'styled-components'

export const Container = styled.form`
    width: 100%;
    text-align: center;
    align-items: center;

    div{
    width: 100%;
    height: 200px;
    margin: 40px;
    display: flex;
    align-items: center;
    }

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
        height: 35px;
        color: white;
        

        &:hover{
            background-color: greenyellow;
            color: black;
        }
    }
    

`;


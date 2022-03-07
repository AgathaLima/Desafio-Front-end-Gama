import styled from 'styled-components';

export const Container = styled.div`
  table{
  width: 70%;
  margin: 0 auto ;
  text-align: center;
  align-items: center ;
  border-collapse:collapse ;
  border: 3px solid #7D38DB;
  border-radius: 15px;

    h2{
      margin:0 ;
      border:0 ;
    }

    thead{
      background-color: #63DC3F ;
      color: #7D38DB ;
      border: 3px solid #7D38DB ;
    }

    tbody{
      border-radius: 0 0 10px 10px;
      border: 3px solid #7D38DB ;
      border-top: 0;
      background-color: white ;
      tr{
        border: 2px solid #e6e6e6 ;
      }
      th{
        border: 2px solid #e6e6e6 ;
      }
  }
    button{
        width: 35px;
        height: 30px;
        border-radius: 10px;
        margin:0 ;
        background: red;
        box-shadow: 1px 1px 1px 1px gray;
        cursor: pointer;
        transition: .50s;

        &:hover{
            background: #f77b7b;
            color: white;
        }

    }
  }

  button{
    background-color: #7D38DB ;
    color: white;
    font-weight: bold ;
    height: 40px;
    border-radius: 15px ;
    margin: 30px ;
    cursor: pointer;
    
    &:hover{
            background: #63DC3F;
            color: black;
        }
  }

  
`;


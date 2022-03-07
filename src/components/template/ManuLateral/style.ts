import styled from 'styled-components'

export const Container = styled.aside`
    list-style: none ;
    flex-direction: column ;
    height: 100% ;
    padding: 3px ;
    margin: 0 ;

   ul{
      margin:0 ;
      padding: 0 ;
      height: 90% ;
   }
 a{
    display: flex ;
    flex-direction: column;
    justify-content:center ;
    align-items: center ;
    height: 65px ;
   text-align: center ;
   color: #7D38DB ;
   ;
   &:hover{
      color:#63DC3F; 
   } 
 }
.logo {
   padding: 0;
   border: 0 ;
   background-color: #63DC3F ;
}

img{
   height: 65px ;
   width: 65px ;
}
div{
   float: bottom;
   text-align: center ;
   margin:0 ;
   padding:0 ;
   cursor:pointer ;
   color: #7d38db ;

   &:hover{
      color: #63DC3F ;
   }

   h3{
      padding: 0 ;
      margin: 0 ;
   }
}
`


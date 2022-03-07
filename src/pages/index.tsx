
import Layout from "../components/template/Layout"
import { Container } from "./style"

export default function Home() {
  return (
     <Layout titulo="" subtitulo="">
       <Container>
     <h1>Hello, Teacher!!</h1>
     <h2>Seja bem vindo ao Cadastro de Provas da <span>Gama Academy</span></h2>
        <p>Navegue pelas barras laterais para cadastar.</p>  
        </Container>
     </Layout>
  )
}

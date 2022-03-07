import Footer from "../components/template/Footer"
import FormTitulo from "../components/template/FormTitulo"
import Layout from "../components/template/Layout"
import { TableTitulo } from "../components/template/TabelaTitulo"

export default function Home() {
  return (
    <div>
     <Layout titulo="Cadasro de provas!" subtitulo="Aqui você cadastra o título de todas as provas que estarão nesse sistema!">
     <FormTitulo />
     <TableTitulo />
     </Layout>
    </div>
  )
}
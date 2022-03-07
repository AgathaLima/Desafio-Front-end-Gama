import FormAlternativas from "../components/template/FormAlternativas"
import Layout from "../components/template/Layout"

export default function Home() {
  return (
    <div>
     <Layout titulo="Cadastro de Alternativas!" subtitulo="Cadastre as alternativas de suas provas e informe se ela corresponde a alternativa correta.">
      <FormAlternativas />
     </Layout>
    </div>
  )
}

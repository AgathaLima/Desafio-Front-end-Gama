import { FormQuestao } from "../components/template/FormQuestao"
import Layout from "../components/template/Layout"

export default function Questoes() {
  return (
    <div>
     <Layout titulo="Cadasro de questões!" subtitulo="Nessa sessão você ira cadastrar as questões e vinculá-las às suas determinadas provas.">
      <FormQuestao />
     </Layout>
    </div>
  )
}
import Layout from '../components/template/Layout'


export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-green-500 to-blue-400`}>
      <h1>johnatan</h1>
      <Layout titulo='Pagina Inicial' subtitulo='A Pagina esta Sendo Contruida...'/>
    </div>
  )
}

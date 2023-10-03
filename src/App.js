import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Direção',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Comercial',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Suporte Interno',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'NOC',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Suporte Externo',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Infraestrutura',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Administrativo',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Financeiro',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'RH',
      cor: '#FF8A29'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Reinaldo Neto',
      cargo: 'CTO',
      imagem: 'https://github.com/iamreinaldo.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Paulo Henrique',
      cargo: 'CEO e Fundador',
      imagem: 'https://github.com/iamreinaldo.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Patrícia Oquendo',
      cargo: 'CFO e Fundadora',
      imagem: 'https://github.com/iamreinaldo.png',
      time: times[0].nome
    },

  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }
      return time;
    }))
  }

  function cadastarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }
  
  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            mudarCor={mudarCorDoTime} 
            key={indice}
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time 
            === time.nome)}
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

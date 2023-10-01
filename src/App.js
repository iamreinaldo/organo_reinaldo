import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape/rodape';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome:'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}  />
      {times.map(times => <Time
         key={times.nome} 
         nome={times.nome} 
         corPrimaria={times.corPrimaria} 
         corSecundaria={times.corSecundaria}
         colaborador={colaboradores.filter(colaborador => colaborador.time === times.nome)}
         />)}
    <Rodape />
    </div>
  );
}

export default App;

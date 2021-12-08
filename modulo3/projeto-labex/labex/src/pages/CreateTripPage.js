import React from 'react';
import { useHistory } from 'react-router-dom';
import {useProtect} from '../hooks/useProtecPage'


function CreateTripPage() {

  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }

  useProtect()

  return (
    <div className="App">
      <p>create</p>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
}

export default CreateTripPage;
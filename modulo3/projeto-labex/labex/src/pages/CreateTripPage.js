import React from 'react';
import { useHistory } from 'react-router-dom';

function CreateTripPage() {

  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }

  return (
    <div className="App">
      <p>create</p>
      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
}

export default CreateTripPage;
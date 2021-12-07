import React from 'react';
import { useHistory } from 'react-router-dom';

function TripDetailsPage() {

  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }

  return (
    <div className="App">
      <p>detalhe</p>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;
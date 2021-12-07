import React from 'react';
import {useHistory} from 'react-router-dom'

function ListTripsPage() {

  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  const goToForm = ()=>{
    history.push('/trips/form')
  }

 

  return (
    <div className="App">
      <p>List</p>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToForm}>Formulário</button>
    </div>
  );
}

export default ListTripsPage;
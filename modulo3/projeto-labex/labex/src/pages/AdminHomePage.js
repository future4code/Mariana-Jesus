import React from 'react';
import { useHistory } from 'react-router-dom';


function AdminHomePage() {

  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  const goToCreate = ()=>{
    history.push('/admin/trips/create')
  }

  const goToDetail = ()=>{
    history.push('/admin/trips/:id')
  }
  return (
    <div className="App">
      <p>Admin</p>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreate}>Criar Viagem</button>
      <button onClick={goToDetail}>Detalhes</button>
    </div>
  );
}

export default AdminHomePage;
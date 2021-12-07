import React from 'react';
import { useHistory } from 'react-router-dom';
function LoginPage() {
  const history = useHistory()
  const goBack = ()=>{
    history.goBack()
  }
  
  const goToAdmin = ()=>{
    history.push('/admin/trips/list')
  }

  return (
    <div className="App">
      <p>Login</p>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToAdmin}>Login</button>
    </div>
  );
}

export default LoginPage;
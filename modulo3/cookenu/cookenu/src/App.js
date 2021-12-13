import react from 'react'
import AddRecipesPage from './pages/AddRecipesPage/AddRecipesPage';
import LoginPage from './pages/LoginPage/LoginPage'
import RecipesListPage from './pages/RecipesListPage/RecipesListPage'
import SignUp from './pages//SignUpPage/SignUpPage'

function App() {
  return (
    <div className="App">
      <AddRecipesPage/>
      <LoginPage/>
      <RecipesListPage/>
      <SignUp/>
    </div>
  );
}

export default App;

import React from 'react'
import AddRecipesPage from './pages/AddRecipesPage/AddRecipesPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RecipesListPage from './pages/RecipesListPage/RecipesListPage'
import SignUp from './pages/SignUpPage/SignUpPage'
import RecipeDetailPage from './pages/RecipeDetailPage/RecipeDetailPage'
import Router from './routes/Router'
import ErrorPage from './pages/ErrorPage/ErrorPage'


function App() {
  return (
    <div className="App">
      {/* <AddRecipesPage/>
      <LoginPage/>
      <RecipeDetailPage/>
      <RecipesListPage/>
      <SignUp/>
      <ErrorPage/> */}
      <Router/>

    </div>
  );
}

export default App;

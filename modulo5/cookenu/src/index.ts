import { app } from "./app";
import login from "./endpoints/user/login";
import signup from './endpoints/user/signup'
import getById from './endpoints/user/getById'
import createRecipes from './endpoints/recipes/createRecipes'
import getRecipeId from './endpoints/recipes/getRecipeId'

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/:id/profile', getById)
app.post('/recipe', createRecipes)
app.get('/recipe/:id', getRecipeId)
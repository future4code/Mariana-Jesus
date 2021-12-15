import { BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'
import FeedPage from '../FeedPage/FeedPage'
import PostPage from '../PostPage/Post'
import Cadastro from '../Cadastro/CadastroPage'
import Header from '../Header/Header'

export default function Router(){
    return(
        <div>
            <BrowserRouter>
    <Header/>
    <Switch>


    <Route exact path={'/'}>
    <FeedPage/>
    </Route>

    <Route exact path={'/login'}>
    <LoginPage/>
    </Route>

    <Route exact path={'/login/:id'}>
    <PostPage/>
    </Route>

    <Route exact path={'/cadastro'}>
    <Cadastro/>
    </Route>

    <Route exact path={'*'}>
    <LoginPage/>
    </Route>

      </Switch>
    </BrowserRouter>
        </div>
    )
} 
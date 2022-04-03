import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import Selection from './pages/Selection/Selection'
import Bank from './pages/Bank/Bank'
import Confirm from './pages/Confirm/Confirm'
import Account from './pages/Account/Account'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/' exact component={Home}/>
                <Route path='/selection' component={Selection}/>
                <Route path='/bank' component={Bank}/>
                <Route path='/confirm' component={Confirm}/>
                <Route path='/account' component={Account}/>
                
                
                
            </Switch>
        </BrowserRouter>
    )
}
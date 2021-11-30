import React from 'react';
import {Route, Switch} from 'react-router-dom';


import Personal1 from './Personal1'
import Personal2 from './Personal2'
import Direccion1 from './Direccion1'
import Direccion2 from './Direccion2'
import Feedback from './Feedback'
import Login from './Login'
import Great from './Great'

class App extends React.Component {
    render() {
        return (
          <Switch>
            <Route exact path='/personal1' component={Personal1} />
            <Route exact path='/personal2' component={Personal2} />
            <Route exact path='/direccion1' component={Direccion1} />
            <Route exact path='/direccion2' component={Direccion2} />
            <Route exact path='/feedback' component={Feedback} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/great' component={Great} />
            <Route path='/' component={Login} />
          </Switch>
        )
    }
}

export { App }; 
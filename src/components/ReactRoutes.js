import React, { Component } from 'react'
import {Switch , Route} from 'react-router-dom'
import App from '../App'
import SignUp from './SignUp'
import Cart from './Cart'


export class ReactRoutes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/app" component={SignUp} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </>
        )
    }
}

export default ReactRoutes

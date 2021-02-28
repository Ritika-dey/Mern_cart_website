import React, { Component } from 'react'
import {Switch , Route} from 'react-router-dom'
import App from '../App'
import SignUp from './SignUp'


export class ReactRoutes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/app" component={SignUp} />
                </Switch>
            </>
        )
    }
}

export default ReactRoutes

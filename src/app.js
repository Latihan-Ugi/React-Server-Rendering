import React from 'react'

import { Switch, Route } from 'react-router'

import HomePageComponent from './pages/HomePageComponent'

class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" render={props => (
                    <HomePageComponent {...props} />
                )}/>
            </Switch>
        )
    }
}

export default App;
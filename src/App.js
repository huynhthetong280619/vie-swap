import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import MainIndex from './MainIndex'
import TradingView from './view/TradingView'

const App = () => {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                <Route exact path="/" component={MainIndex} />
                <Route path="/market" component={TradingView} />
            </Switch>
        </Suspense>
    )
}

export default App;
import * as React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Weather from './containers/Weather'

export const Router: React.StatelessComponent<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Weather} />
    </Switch>
  </BrowserRouter>
)

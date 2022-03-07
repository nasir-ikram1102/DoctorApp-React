import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import './scss/style.scss';
import { commonService } from './_services'

// Routes config
import publicRoutes from './routes/publicRoutes'
import { CContainer, CFade } from '@coreui/react'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Layout = React.lazy(() => import('./containers/Layout'));

class App extends Component {

  render() {
    return (
      <Router>
          <React.Suspense fallback={loading}>
            <Switch>

            {publicRoutes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => {
                    if(!commonService.getLoginUser()){
                      return <CFade><route.component {...props} /></CFade>
                    }
                    else
                      return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                  }} />
              )
            })}

            <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;

import React, { Suspense, Component } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import { commonService } from '../_services'

// routes config
import privateEoutes from '../routes/privateRoutes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class Content extends Component {

  render(){
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {privateEoutes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => {

                    return <CFade><route.component {...props} /></CFade>
                    // if(commonService.getLoginUser()){
                    //   return <CFade><route.component {...props} /></CFade>
                    // }
                    // else
                    //   return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                  }} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
  }
}

export default React.memo(Content)

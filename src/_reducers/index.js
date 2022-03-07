import { combineReducers } from 'redux'
import { alert } from './alert.reducer';
import { authentication }  from './authentication.reducer';

import { users }  from './users.reducer'; 

import { cpts }  from './cpts.reducer'; 
import { icds }  from './icds.reducer'; 

import { cases }  from './cases.reducer'; 

const initialState = {
    sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
}


 export default combineReducers({
    alert,
    authentication,
    changeState,
    
    users,
    cpts,
    icds,
    cases,
});
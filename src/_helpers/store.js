import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();



// const initialState = {
//     sidebarShow: 'responsive'
//   }
  
//   const changeState = (state = initialState, { type, ...rest }) => {
//     switch (type) {
//       case 'set':
//         return {...state, ...rest }
//       default:
//         return state
//     }
//   }

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
    )
);

// export const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );

//const store = createStore(changeState)
export default store;
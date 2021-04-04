import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './Reducers'
import {
  Router,
} from 'react-router-dom'
import reduxTHunk from 'redux-thunk'
import history from './history'
const composeEnhance=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(
  reducers,
  composeEnhance(applyMiddleware(reduxTHunk))
  )

ReactDom.render(
  <Provider store={store}>
   <Router history={history}>
        <App />
   </Router>
   </Provider>
   
,document.getElementById("root"))
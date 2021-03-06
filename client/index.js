import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
  )
})

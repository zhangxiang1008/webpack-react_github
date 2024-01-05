// src/index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import MyPromise from '../utils/Promise/Mypromise'
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./app.tsx', function () {
    console.log('Accepting the updated printMe  module!')
    ReactDOM.render(<App />, document.querySelector('#root'))
  })
}
ReactDOM.render(<App />, document.querySelector('#root'))

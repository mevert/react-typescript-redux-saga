import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import { state } from './root-reducer'
import sagas from './root-saga'

function * sagaRunner (allSagas: any) {
  for (let saga of allSagas) {
    yield fork(saga)
  }
}

const enhancers = []

if (process.env.NODE_ENV === 'development') {

  const windowIfDefined = typeof window === 'undefined' ? null : window as any
  const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer

  if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
  }
}

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers
)

const store = createStore(
  state,
  enhancer
)

sagaMiddleware.run(sagaRunner, sagas)

export default store

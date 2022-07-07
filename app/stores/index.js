import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import sagaRoot from './sagaRoot';
import reducers from './reducerRoot';

const sagaMiddleware = createSagaMiddleware({});

const finalCreateStore = composeWithDevTools(applyMiddleware(sagaMiddleware))(
  createStore,
);
const store = finalCreateStore(reducers);

sagaMiddleware.run(sagaRoot);

export default store;

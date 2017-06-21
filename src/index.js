import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/routerMap'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import commentsReducer from './reducer/common'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const store = createStore(commentsReducer)


ReactDOM.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

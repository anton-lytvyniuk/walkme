import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render((
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div> 
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import from these three libraries, which we installed with npm
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import {fetchReddit} from './actions';
// grab our reducer. import will automatically choose the index.js file in the
// ./reducers folder.
import reducer from './reducers'

const store = createStore(
    reducer,
    applyMiddleware(
        // thunk works behind the scenes to allow us to make async actions. Without
        // it, the code in actions/index.js would not work.
        thunkMiddleware,
        createLogger() // just to help us see what's going on
    )
);

// Trigger the fetchStarships "action"
store.dispatch(fetchReddit());
// We need wrap our whole app in the Provider component. This lets Redux do its magic.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

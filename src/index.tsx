import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import Theme from './Theme';


ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Theme>
                <App/>
            </Theme>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

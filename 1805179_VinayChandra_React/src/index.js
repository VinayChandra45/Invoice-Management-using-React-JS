import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
 import theme from '../src/utils/theme';
//import store from './utils/store';
 import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import {store} from './utils/store';
ReactDOM.render(
     <MuiThemeProvider theme={theme}>
      <App />
     </MuiThemeProvider>,
   document.getElementById('root')
);


// CRACKED BY ILLUMINATI
// TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
 ReactDOM.render(
    <Provider store={store}>  
         <App />
    </Provider>,
    document.getElementById('root')
 );

serviceWorker.unregister();


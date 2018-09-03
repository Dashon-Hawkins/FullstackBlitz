import  React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMidlleware} from 'redux'

const store =createStore(() =>[], {}, applyMidlleware())
ReactDom.render(
<Provider store={store}><App/></Provider>, document.querySelector('#root'));


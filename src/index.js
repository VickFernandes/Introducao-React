import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App10';
//Para transitar entre os "App's, alterar para o arquivo desejado na linha 4"
import reportWebVitals from './reportWebVitals';

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
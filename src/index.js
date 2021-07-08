import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Component/Main'
import ShowTime from './jsx_with_js/showDate';
import SetState from './SetState/State';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<SetState />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

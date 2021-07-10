import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './component/Main';
import ShowDate from './jsx_with_jx/ShowDate';
import ClassCom from './Class Component/ClassCom';
import Form from './Form/SimpleForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Form />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

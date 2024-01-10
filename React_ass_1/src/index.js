import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App,Person,Button,clicked,Header,List} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Person name="Rohan Malakar" age="21" />
    <Button text="Click here" onclick={clicked} />
    <Header title={"this is a header which is used in top of the website"} text="Header"  />
    <List items={{item1:"one",item2:"two",item3:"three"}} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

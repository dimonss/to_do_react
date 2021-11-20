import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";


ReactDOM.render(
    <React.StrictMode>
        <div className="index">
            <Header/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
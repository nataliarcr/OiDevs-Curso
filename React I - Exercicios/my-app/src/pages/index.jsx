import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import Button from '../components/button/button';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function loginPage () {
  navigator("login");

  return(
    <div className="Container">
      <div className="box-login">
        <title text="Login"/>
        <input label="Usuario" type= "text"></input>
        <input label="Senha"></input>
        <button type="button" title="Entrar" redirecionar={loginPage}></button>
      </div>
    </div>
  )
}

export default loginPage;
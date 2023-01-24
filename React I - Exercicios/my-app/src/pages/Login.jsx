import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "../../components/Link";

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
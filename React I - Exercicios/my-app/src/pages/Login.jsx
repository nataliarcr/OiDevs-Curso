import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../components/button/button.css"
import Button from "../components/button/button";
import Input from "../components/input/input";
import Title from "../components/title/title";



const Login = () => {

  const navigate = useNavigate();

  const goToHome = () => {
      navigate("/home");
    };

    return(
      <div className="container">
        <div className="box-login">
          <Title />
          <Input />
          <Button className="login-button" title='Entrar' onClick={goToHome} bgcolor="black"/>
        </div>
      </div>
    )
  }
  
  export default Login;
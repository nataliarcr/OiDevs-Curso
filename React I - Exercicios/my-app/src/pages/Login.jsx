import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import "../components/button/button.css"
import Button from "../components/button/button";
import Input from "../components/input/input";
import Title from "../components/title/title";
import Link from "../components/link/link";
import Subtitle from "../components/subtitles/subtitles";



const Login = () => {

  const navigate = useNavigate();
  const [usuarios] = useState([
    {
        id: 1, 
        username: "nati",
        password: "nati123",
        email: "natalia@gmail.com",
        created_at: new Date()
    },
]);

  const [username, setUsername] = useState(""); //input usuario
  const [password, setPassword] = useState(""); //input password
  const [subtitle, setSubtitle] = useState("User");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("Login");


  const goToHome = () => {
    const user = usuarios.find((user) => user.username === username);
    if (!user) {
      setErrorMessage("Usuário não encontrado");
      return;
    }
    if (user.password !== password) {
      setErrorMessage("Senha incorreta");
      return;
    }
    navigate("/home");
  };

  const changeTitle = () => {

    setTitle("Novo titulo");
  };

  const changeSub = (e) => {
    setSubtitle(e.target.value);
  };
  // const changeColorInput = () => {
  //   setColorInput("red");
  // };

  return (
    <div className="container">
      <div className="box-login">
        <Title text={title} />
        <Subtitle text={username} />
            {/* <Input 
            label="Usuário"
            value={username}
            onChange={changeSub}
            /> */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Input
          label="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          text="Entrar" 
          aoClicar={goToHome} />
        <Button 
          text="Mudar Titulo" 
          aoClicar={changeTitle}/>
        <Link />
      </div>
    </div>
  );
};
  
  export default Login;
import { useNavigate } from "react-router-dom";
import Title from "../components/title/title";
import Button from "../components/button/button";
import Subtitle from "../components/subtitles/subtitles";


const  Home = () => {
    const navigate = useNavigate();
    const username = document.getElementById('user');

    const goToLogin = () => {
        navigate("/");
    };

    
    return(
    <div className="container">
      <div className="box-login">
        <Title text="Home" />
        <Subtitle text = "Bem vindo!" />     
        <Button className="button" text="Voltar" aoClicar={goToLogin} />
      </div>
    </div>
    );
};


export default Home;

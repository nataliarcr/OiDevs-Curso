import { useNavigate } from "react-router-dom";
import Title from "../components/title/title";
import Button from "../components/button/button";
import username from "./Login";
import Subtitle from "../components/subtitles/subtitles";


const  Home = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };


    return(
    <div className="container">
      <div className="box-login">
        <Title text="Home" />
        <Subtitle text={username} />
        <Button className="button" text="Voltar" aoClicar={goToLogin} />
      </div>
    </div>
    );
};


export default Home;

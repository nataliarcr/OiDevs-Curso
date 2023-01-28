import { useNavigate } from "react-router-dom";
import Title from "../components/title/title";
import Button from "../components/button/button";



const  Home = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };


    return(
    <div className="container">
      <div className="box-login">
        <Title text="Home" />
        <Button title="Voltar" click={goToLogin} />
      </div>
    </div>
    );
};



export default Home;

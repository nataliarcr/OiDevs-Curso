import { useNavigate } from "react-router-dom";


const Button = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
      };
      
    return(
        <>
        <button onClick={goToHome}> Entrar </button>
        </>
    )

}
 
export default Button;
import "./button.css";

const Button = (toHome) => {

    return(
        <>
        <button onClick={toHome}> Entrar </button>
        </>
    )

}

// const backButton = () => {
//     const navigate = useNavigate();

//     const goToLogin = () => {
//         navigate("/");
//       };
      
//     return(
//         <>
//         <button onClick={goToLogin}> Voltar </button>
//         </>
//     )

// }
 
export default Button;

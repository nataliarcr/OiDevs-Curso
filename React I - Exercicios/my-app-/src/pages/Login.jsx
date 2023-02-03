
import Button from "../components/button/button";
import Input from "../components/input/input";

const Login = () => {
  // const navigate =  useNavigate ();
  const loginInput = Input;
  const loginButton = Button;

  return(
    <div className="Container">
      <div className="box-login">
        <title text="Login"/>
        <>{loginInput}</>
        <>{loginButton}</>
      </div>
    </div>
  )
}

export default Login;
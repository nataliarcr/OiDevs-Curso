import "./input.css";

const Input = ()  => {
 return(
    <>
    <label className="input">Usuário</label>
    <input  name="input"></input>
    <label className="input">{password}</label>
    <input  name="input" type="password"></input>
    </>
    
 );
}

export default Input;
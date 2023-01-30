import "./input.css";
import ProtoTypes from "prop-types";

const Input = ({inputType, placeholder, onChange, value})  => {
 return(
    <div>
    <input type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="input"></input>
    </div>
    
 );
}

Input.propTypes = {
   inputType: ProtoTypes.string,
   placeholder: ProtoTypes.string.isRequired,
   onChange: ProtoTypes.func,
   value: ProtoTypes.string,
 };
export default Input;
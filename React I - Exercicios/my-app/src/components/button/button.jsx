import "./button.css";
import {PropTypes} from "prop-types";

const Button = ({text, aoClicar}) => {
    return (
      <div>
        <button
          className="button"
        //   style={({ backgroundColor: bgColor, color })}
          onClick={aoClicar}
        >
          {text}
        </button>
      </div>
    );
  }
  

  Button.propTypes = {
    title: PropTypes.string,
    aoClicar: PropTypes.func,
  };

export default Button;

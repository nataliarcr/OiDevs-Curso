import "./title.css"
import ProtoTypes from "prop-types";

const  Title = ({text}) => {
    
    return(
        <>
            <h1 className="title">{text}</h1>
        </>
    )
};

Title.propTypes = {
    text: ProtoTypes.string,
  };
export default Title;
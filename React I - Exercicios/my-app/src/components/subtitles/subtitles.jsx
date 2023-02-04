import ProtoTypes from "prop-types";

const Subtitle = ({text}) => {
  return (
    <h3 style={{ color: "#ffff"}}>{text}</h3>
  );
};

Subtitle.propTypes = {
  text: ProtoTypes.string,
};

export default Subtitle;
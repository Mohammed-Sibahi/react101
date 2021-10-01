import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
    
  
  return (
    <button
      onClink={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

// to set the default color property to buttons
Button.defaultProps = {
  color: "steelblue",
};

// determine th type of data for text and color
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

/** PropTypes are a mechanism to ensure that components use the correct data type
 *  and pass the right data, and that components use the right type of props, 
 * and that receiving components receive the right type of props.

We can think of it like a puppy being delivered to a pet store. 
The pet store doesn’t want pigs, lions, frogs, or geckos — it wants puppies. 
PropTypes ensure that the correct data type (puppy) is delivered to 
the pet store, and not some other kind of animal. */
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// const headingStyle = {
//  color: 'red',
//  backgroundColor: 'black'
// }
export default Header;

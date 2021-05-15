import { PropTypes } from "prop-types";

const Loader = ({ show }) => {
  console.log(show);
  return show ? <div className="loader"></div> : null;
};

Loader.propTypes = {
  show: PropTypes.bool,
};

export default Loader;

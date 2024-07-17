import PropTypes from 'prop-types';
import './ContentBox.css';

function ContentBox({ text }) {
  return (
    <div className="content-box">
      {text}
    </div>
  );
}

ContentBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContentBox;

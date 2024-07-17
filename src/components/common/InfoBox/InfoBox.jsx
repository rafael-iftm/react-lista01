import PropTypes from 'prop-types';
import './InfoBox.css';

function InfoBox({ text }) {
  return (
    <div className="info-box">
      {text}
    </div>
  );
}

InfoBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InfoBox;

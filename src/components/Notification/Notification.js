 import PropTypes from 'prop-types';
import s from './Notificationmodule.css';

function Notification ({message}) {
   return (
      <p
         className={s.text}>{message}
      </p>);
}

Notification.propTypes = {
   message: PropTypes.string.isRequired,
}

export default Notification;
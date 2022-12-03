import { NotificationText } from './Notificatin.styled';
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <>
      <NotificationText>{message}</NotificationText>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

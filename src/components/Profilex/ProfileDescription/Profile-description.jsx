import PropTypes from 'prop-types';
import css from './style.module.css';

export const ProfileDescription = ({ username, tag, location }) => {
  return (
    <>
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

ProfileDescription.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

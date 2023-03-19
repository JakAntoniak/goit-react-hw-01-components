import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const ProfileDataCounter = ({ type, value }) => {
  return (
    <>
      <li className={css['data-counter']}>
        <span className={css.label}>{type}</span>
        <span className={css.quantity}>{value}</span>
      </li>
    </>
  );
};

export const ProfileData = ({ stats }) => {
  return (
    <>
      <ProfileDataCounter type="followers" value={stats.followers} />
      <ProfileDataCounter type="likes" value={stats.likes} />
      <ProfileDataCounter type="views" value={stats.views} />
    </>
  );
};

ProfileDataCounter.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
};

ProfileData.propTypes = {
  stats: PropTypes.object,
};

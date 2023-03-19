import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { ProfileData } from './Profile-data';
import { ProfileDescription } from './Profile-description';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <ProfileDescription username={username} tag={tag} location={location} />
      </div>
      <ul className={css.stats}>
        <ProfileData stats={stats} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

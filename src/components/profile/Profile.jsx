import '../profile/profile.css';
import { ProfileData } from './Profile-data';
import { ProfileDescription } from './Profile-description';
import { ProfilePicture } from './Profile-picture';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <ProfilePicture avatar={avatar} />
        <ProfileDescription username={username} tag={tag} location={location} />
      </div>

      <ul className="stats">
        <ProfileData stats={stats} />
      </ul>
    </div>
  );
};

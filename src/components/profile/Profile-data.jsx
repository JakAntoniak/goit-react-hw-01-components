export const ProfileDataCounter = ({ type, value }) => {
  return (
    <>
      <li className="data-counter">
        <span className="label">{type}</span>
        <span className="quantity">{value}</span>
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

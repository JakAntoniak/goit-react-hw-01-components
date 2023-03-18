export const ProfileDescription = ({ username, tag, location }) => {
  return (
    <>
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};

import css from '../friend-list/friend-list.css';

export const ListItem = ({ friend }) => {
  return (
    <>
      <li className="friend-item">
        <span className={friend.isOnline ? 'online' : 'offline'}></span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    </>
  );
};

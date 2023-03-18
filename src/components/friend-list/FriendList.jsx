import { ListItem } from './List-item';
import '../friend-list/friend-list.css';

export const FriendList = ({ friends, numberOfFriendsShown }) => {
  const FriendsToDisplay = [];

  for (let i = 0; i < numberOfFriendsShown; i++) {
    FriendsToDisplay.push(friends[i]);
  }

  return (
    <ul className="friend-list">
      {FriendsToDisplay.map(friend => {
        return <ListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

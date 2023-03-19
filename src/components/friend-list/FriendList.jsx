import { ListItem } from './List-item';
import css from './Friend.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends, numberOfFriendsShown }) => {
  const FriendsToDisplay = [];

  for (let i = 0; i < numberOfFriendsShown; i++) {
    FriendsToDisplay.push(friends[i]);
  }

  return (
    <ul className={css['friend-list']}>
      {FriendsToDisplay.map(friend => {
        return <ListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
  numberOfFriendsShown: PropTypes.number,
};

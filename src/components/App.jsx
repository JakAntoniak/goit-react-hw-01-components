import user from './profile/user.json';
import stats from './statistics/data.json';
import friends from './friend-list/friends.json';
import transactions from './transactions/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload Stats" stats={stats} />
        <Statistics stats={stats} />
        <FriendList friends={friends} numberOfFriendsShown={5} />
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};

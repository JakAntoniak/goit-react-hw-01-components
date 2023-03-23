import user from './user.json';
import stats from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import css from './style.module.css';

export const App = () => {
  return (
    <>
      <div className={css.container}>
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

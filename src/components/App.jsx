import user from './user.json';
import stats from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { Profile } from './Profilex/Profile';
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

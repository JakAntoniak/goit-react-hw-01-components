import { TBody } from './TBody';
import { THead } from './THead';
import './transaction-history.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <THead />
      <TBody transactions={transactions} />
    </table>
  );
};

import { TBody } from './TBody';
import { THead } from './THead';
import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <THead />
      <TBody transactions={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};

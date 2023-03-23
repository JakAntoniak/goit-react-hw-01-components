import { TBody } from './TableBody/TBody';
import { THead } from './TableHead/THead';
import PropTypes from 'prop-types';
import css from './style.module.css';

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

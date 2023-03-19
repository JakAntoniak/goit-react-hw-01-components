import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => {
        return (
          <tr key={transaction.id} className={css.row}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

TBody.propTypes = {
  transactions: PropTypes.array,
};

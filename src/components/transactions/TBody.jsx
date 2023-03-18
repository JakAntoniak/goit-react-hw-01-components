import './transaction-history.css';

export const TBody = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => {
        return (
          <tr key={transaction.id} className="row">
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

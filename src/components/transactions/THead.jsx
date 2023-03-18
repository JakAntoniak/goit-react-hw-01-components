import css from './transaction-history.css';

export const THead = () => {
  return (
    <thead className="table-head">
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

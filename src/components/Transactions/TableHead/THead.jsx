import css from './style.module.css';

export const THead = () => {
  return (
    <thead className={css['table-head']}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

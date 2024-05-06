import css from '../css/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => { 
    return (
    <table className={css.table}>
  <thead>
    <tr>
      <th className={`${css.item} ${css.grey}`} >Type</th>
      <th className={`${css.item} ${css.grey}`}>Amount</th>
      <th className={`${css.item} ${css.grey}`}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => {return (
        <tr className={css.line} key={item.id}>
      <td className={css.item}>{item.type}</td>
      <td className={css.item}>{item.amount}</td>
      <td className={css.item}>{item.currency}</td>
    </tr>)}) }
  </tbody>
</table>)
    
};

export default TransactionHistory;
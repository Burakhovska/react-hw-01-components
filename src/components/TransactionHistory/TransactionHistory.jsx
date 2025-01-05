import PropTypes from 'prop-types';
import transactions from '../../transactions.json'
import { TransactionTable } from './TransactionHistory.styled';



export const TransactionHistory = (items) => {
    return(<TransactionTable items={transactions} class="transaction-history" >
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
             {transactions.map(({ id, type, amount, currency }) => (
         <tr key={id}>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
       </tr>
        ))}

        </tbody>
      </TransactionTable>)
}
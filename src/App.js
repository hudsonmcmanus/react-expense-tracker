import './App.css';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { Expenses } from './components/Expenses.js';
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

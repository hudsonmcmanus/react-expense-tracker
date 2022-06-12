import './App.css';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { Expenses } from './components/Expenses.js';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <Expenses />
      </div>
    </div>
  );
}

export default App;

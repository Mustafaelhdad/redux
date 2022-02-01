import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login, logout } from './store/actions'

function App() {
  const count = useSelector(state => state.counter.count)
  const isLogged = useSelector(state => state.logged.logged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        {isLogged ? <button onClick={() => dispatch(logout())}>logout</button> : <button onClick={() => dispatch(login())}>login</button>}
      </header>
      <div className="counter">
        <button onClick={() => dispatch(increment(5))} className='button'>+</button>
        <button onClick={() => dispatch(increment())} className='button'>+ 2</button>
        <button onClick={() => dispatch(decrement(3))} className='button'>-</button>
      </div>
    </div>
  );
}

export default App;

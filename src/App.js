import { useSelector } from 'react-redux';
import './App.css';
import Counter from './ComponentsOne/Counter';
function App() {

  const count = useSelector((state) => state.counter.count)

  return (
    <div className="App">
      <h2>Counter Application</h2>
      <h4> Count: {count} </h4>
      <Counter/>
    </div>
  );
}

export default App;

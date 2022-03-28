import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.user);

  return (
    <div className='app-wrapper'>
    </div>
  );
}

export default App;

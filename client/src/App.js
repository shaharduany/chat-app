import './App.css';
import { useSelector } from 'react-redux';
import Nav from './components/Nav';

function App() {
  const user = useSelector(state => state.user);
  console.log(user);
  const rooms = useSelector(state => state.rooms);
  console.log(rooms);
  
  return (
    <div className='app-wrapper'>
      <Nav />
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
    <div className="App">
     <Login />
     
     
     {localStorage.getItem('token') && <FriendsList />}
     <AddFriend />
    </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>

    </div>
  );
}

function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>External Users</h1>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>

  );
}
function Users(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h3>Email: {props.email}</h3>
    </div>

  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleDecrease = () => {
    //const newCount = count + 1;
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>

  );
}

export default App;

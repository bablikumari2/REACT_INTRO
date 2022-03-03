import logo from './logo.svg';
import './App.css';

function App() {
  const name = "babli";
  const data = ["Andorid","BlackBery","iphone","Window Phone"];
  const data1 = ["Samsung","HTC","MicroMax","Apple"]
  return (
    <div className='App'>
      <h1 className='head'>Mobile Operating System</h1>

      <ul>

        {data.map((e) => (
          <li>{e}</li>
        ))}
        
      </ul>
      <h1>Mobile Manufactures</h1>
      <ul>
      {data1.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
    );
}
  

export default App;

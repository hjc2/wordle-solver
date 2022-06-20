import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function sayHello() {
}

function App() {

  const [message, setMessage] = useState('');
  const [messageB, setMessageB] = useState('');
  const [messageC, setMessageC] = useState('');

  var arr = ['']

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
    printMany()
  };
  const handleChangeB = event => {
    setMessageB(event.target.value);
    console.log('value is:', event.target.value);
    arr[3] = event.target.value
    printMany()
  };

  const handle = event => {

  }


  const printMany = even => {
    console.log("arr: " + arr)
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          onChange={handleChange}
        </p>

        <div className='Green'>
          <input type="text" maxLength="1" className="App-Green-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1"/>
          <input type="text" maxLength="1" className="App-Green-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1"/>
          <input type="text" maxLength="1" className="App-Green-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1"/>
          <input type="text" maxLength="1" className="App-Green-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1"onChange={handleChange} value={message}/>
          <input type="text" maxLength="1" className="App-Green-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeB} value={messageB}/>
        </div>

        <h2>Message: {message}</h2>

        <button onClick={sayHello.bind(this)}>  Activate Lasers
        </button>

      </header>
    </div>
  );
}

export default App;

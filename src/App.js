import logo from './logo.svg';
import './App.css';
import wordsList from './words.json'
import { useState } from 'react';
import React from 'react';

function sayHello() {
  //console.log(arr)
  console.log(outvalue)
  outvalue = outvalue + 1
}


var arr = []
var valArr = []

var valid = []
const words = wordsList["array"]

var outvalue = 1
var out = []
console.log(words)
/*
for(let i = 0; i < 5; i++){
  arr[i] = ''
  valArr[i] = ''
} */

function App() {

  const [message, setMessage] = useState('');


  function filterYellow(){
    var result = words.filter(word => word.includes(valArr[0]));
    for(let i = 1; i < 5; i++){
      console.log(arr[i])
      if(valArr[i] !== '' && valArr[i] !== undefined){
        result = result.filter(result => result.includes(valArr[i]));
        console.log("filiter")
      }
    }

    valid = result

    return(result)
  }

  function handle(a, event) {
    console.log('value is:', event.target.value);
    arr[a] = event.target.value
    valArr[a] = event.target.value
    printMany()
    console.log(filterYellow())
    setMessage(filterYellow)
  }

  const handleChangeA = event => {
    handle(0, event)
  };
  const handleChangeB = event => {
    handle(1, event)
  };
  const handleChangeC = event => {
    handle(2, event)
  };
  const handleChangeD = event => {
    handle(3, event)
  };
  const handleChangeE = event => {
    handle(4, event)
  };
  const handleChangeO = event => {
    handleO(event)
  }

  function handleO(event) {
    out[0] = event.target.value
    console.log("a")
    console.log(out)
    setMessage(event.target.value);
  }
  
  const printMany = event => {
    console.log("arr: " + arr)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          onChange={handleChangeA}
        </p>

        <div className='Green'>
          <input type="text" maxLength="1" className="App-Green-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeA} value={valArr[0]}/>
          <input type="text" maxLength="1" className="App-Green-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeB} value={valArr[1]}/>
          <input type="text" maxLength="1" className="App-Green-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeC} value={valArr[2]}/>
          <input type="text" maxLength="1" className="App-Green-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeD} value={valArr[3]}/>
          <input type="text" maxLength="1" className="App-Green-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeE} value={valArr[4]}/>
        </div>

        

        <button type="button" onClick={sayHello.bind(this)} value="big" id="show"> click me! </button>

        <input type="number" maxLength="15" className="Output" autoComplete="off" spellCheck="false" autoCorrect="off" onChange={handleChangeO} value={out[0]}/>
        
      </header>
      <h2>Message: {message}</h2>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import wordsList from './words.json'
import answerList from './answerList.json'

import { useState } from 'react';
import React from 'react';

var arr = []
var valArr = []

var valid = []
const words = answerList["array"]

function App() {

  const [message, setMessage] = useState([]);


  function filterAll(){
    let green = filterGreen()
    let yellow = filterYellow(green)

    return(yellow)
  }
  function filterGreen(){
    var result = words.filter(word => word.includes(valArr[0]));

    var extra = []

    for(let i = 0; i < result.length; i++){
      var isGreen = true
      for(let j = 0; j < 5; j++){
        if(valArr[j] !== '' && valArr[j] !== undefined && arr[j] != result[i].charAt(j)){
          isGreen = false
        }
      }
      if(isGreen){
        extra.push(result[i])
      }
    }

    valid = extra

    return(extra)
  }
  function filterYellow(green){
    var result = green.filter(green => green.includes(valArr[0]));
    for(let i = 5; i < 10; i++){
      //console.log(arr[i])
      if(valArr[i] !== '' && valArr[i] !== undefined){
        result = result.filter(result => result.includes(valArr[i]));
        //console.log("filiter")
      }
    }

    valid = result

    return(result)
  }

  function handle(a, event) {
    //console.log('value is:', event.target.value);
    arr[a] = event.target.value
    valArr[a] = event.target.value
    printMany()
    //console.log(filterYellow())
    setMessage(filterAll())
    console.log(arr)
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
  const handleChangeF = event => {
    handle(5, event)
  };
  const handleChangeG = event => {
    handle(6, event)
  };
  const handleChangeH = event => {
    handle(7, event)
  };
  const handleChangeI = event => {
    handle(8, event)
  };
  const handleChangeJ = event => {
    handle(9, event)
  };
  const printMany = event => {
    //console.log("arr: " + arr)
    //console.log(message)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          onChange={message[0]}
        </p>

        <div className='Green'>
          <input type="text" maxLength="1" className="App-Green-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeA} value={valArr[0]}/>
          <input type="text" maxLength="1" className="App-Green-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeB} value={valArr[1]}/>
          <input type="text" maxLength="1" className="App-Green-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeC} value={valArr[2]}/>
          <input type="text" maxLength="1" className="App-Green-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeD} value={valArr[3]}/>
          <input type="text" maxLength="1" className="App-Green-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeE} value={valArr[4]}/>
        </div>
        <br></br>
        <div className='Yellow'>
          <input type="text" maxLength="1" className="App-Yellow-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeF} value={valArr[5]}/>
          <input type="text" maxLength="1" className="App-Yellow-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeG} value={valArr[6]}/>
          <input type="text" maxLength="1" className="App-Yellow-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeH} value={valArr[7]}/>
          <input type="text" maxLength="1" className="App-Yellow-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeI} value={valArr[8]}/>
          <input type="text" maxLength="1" className="App-Yellow-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeJ} value={valArr[9]}/>
        </div>
        <h2>valid words: + {message.length} <br></br>{message.join(", ")}</h2>
        {console.log(typeof message)}
        {console.log(message)}
        
      </header>
    </div>
  );
}

export default App;

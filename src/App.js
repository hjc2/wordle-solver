import logo from './logo.svg';
import './App.css';
import wordsList from './words.json'
import answerList from './answerList.json'

import { useState } from 'react';
import React from 'react';

var arr = []
var valArr = []

var valid = []
var howlong = 2315
const words = answerList["array"]

function App() {

  const [message, setMessage] = useState([]);

  function filterAll(){
    let green = filterGreen()

    console.log(green.length)
    let yellow = filterYellow(green)
    let grey = filterGrey(yellow)
    howlong = grey.length

    return(grey)
  }

  function filterGreen(){
    var result = words
    console.log("words length: " + result.length)

    var extra = []

    for(let i = 0; i < result.length; i++){
      var isGreen = true
      for(let j = 0; j < 5; j++){
        if(arr[j] !== '' && arr[j] !== undefined && arr[j] !== result[i].charAt(j)){
          isGreen = false
        }
      }
      if(isGreen){
        extra.push(result[i])
      }
    }

    valid = extra

    console.log("extra length: " + extra.length)

    return(extra)
  }

  function filterYellow(green){
    var result = green

    for(let i = 5; i < 10; i++){
      if(arr[i] !== '' && arr[i] !== undefined){
        result = result.filter(result => result.includes(arr[i]));
      }
    }

    valid = result

    return(result)
  }

  function filterGrey(green){
    var result = green
    var extra = []
    for(let i = 0; i < result.length; i++){
      var toggle = true;
      for(let j = 10; j < 30; j++){
        if(result[i].includes(arr[j]) && arr[j] !== '' && arr[j] !== undefined){
          toggle = false
        }
      }
      if(toggle){
        extra.push(result[i])
      }
    }
    return(extra)
  }

  function singleGrey(green, letter, index){

    var result = []

    //for(let i = 0; i < )

    return(result)
  }

  function handle(a, event) {
    //console.log('value is:', event.target.value);
    arr[a] = event.target.value.toLowerCase()
    valArr[a] = event.target.value.toUpperCase()
    setMessage(filterAll())
    console.log(arr)
  }

  const handleChange = (event, num) => {
    handle(num, event)
  }

  return (
    <div className="App">
      <header className="App-header">

      <h1> Wordle Solver </h1>
        <p>
          Recommended: {message[Math.floor((Math.random() * howlong))]}
        </p>

        <div className='Green'>
          <input type="text" maxLength="1" className="App-Green-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 0)}} value={valArr[0]}/>
          <input type="text" maxLength="1" className="App-Green-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 1)}} value={valArr[1]}/>
          <input type="text" maxLength="1" className="App-Green-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 2)}} value={valArr[2]}/>
          <input type="text" maxLength="1" className="App-Green-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 3)}} value={valArr[3]}/>
          <input type="text" maxLength="1" className="App-Green-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 4)}} value={valArr[4]}/>
        </div>
        <div className='Yellow'>
          <input type="text" maxLength="1" className="App-Yellow-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 5)}}value={valArr[5]}/>
          <input type="text" maxLength="1" className="App-Yellow-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 6)}} value={valArr[6]}/>
          <input type="text" maxLength="1" className="App-Yellow-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 7)}} value={valArr[7]}/>
          <input type="text" maxLength="1" className="App-Yellow-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 8)}} value={valArr[8]}/>
          <input type="text" maxLength="1" className="App-Yellow-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 9)}} value={valArr[9]}/>
        </div>
        <div className='Grey'>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 10)}}value={valArr[10]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 11)}}value={valArr[11]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 12)}}value={valArr[12]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 13)}}value={valArr[13]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 14)}}value={valArr[14]}/>
          <br></br>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 15)}}value={valArr[15]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 16)}}value={valArr[16]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 17)}}value={valArr[17]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 18)}}value={valArr[18]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 19)}}value={valArr[19]}/>
          <br></br>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 20)}}value={valArr[20]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 21)}}value={valArr[21]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 22)}}value={valArr[22]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 23)}}value={valArr[23]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 24)}}value={valArr[24]}/>
          <br></br>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 25)}}value={valArr[25]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 26)}}value={valArr[26]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 27)}}value={valArr[27]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 28)}}value={valArr[28]}/>
          <input type="text" maxLength="1" className="App-Grey-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={(e) => {handleChange(e, 29)}}value={valArr[29]}/>
        </div>
        <h2>valid words: + {message.length}</h2>
        <br></br>
        <div className='Output' style={{paddingLeft: '50px', paddingRight : '50px'}}>
          {message.join(", ").toUpperCase()}
        </div>
        {console.log(typeof message)}
        {console.log(message)}
        
      </header>
    </div>
  );
}

export default App;

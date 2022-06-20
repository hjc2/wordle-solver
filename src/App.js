import logo from './logo.svg';
import './App.css';
import wordsList from './words.json'

function sayHello() {
  console.log(arr)
}

const arr = []
const valArr = []
var valid = []
const words = wordsList["array"]
console.log(words)
function App() {
  
  function filterGreen(){
    
  }

  function handle(a, event) {
    console.log('value is:', event.target.value);
    arr[a] = event.target.value
    valArr[a] = event.target.value
    printMany()

    console.log(words)
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


  const printMany = even => {
    console.log("arr: " + arr)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          onChange={arr}
        </p>

        <div className='Green'>
          <input type="text" maxLength="1" className="App-Green-0" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeA} value={valArr[0]}/>
          <input type="text" maxLength="1" className="App-Green-1" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeB} value={valArr[1]}/>
          <input type="text" maxLength="1" className="App-Green-2" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeC} value={valArr[2]}/>
          <input type="text" maxLength="1" className="App-Green-3" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeD} value={valArr[3]}/>
          <input type="text" maxLength="1" className="App-Green-4" autoComplete="off" spellCheck="false" autoCorrect="off" data-index="1" onChange={handleChangeE} value={valArr[4]}/>
        </div>

        <h2>Message: {valid}</h2>

        <button onClick={sayHello.bind(this)}>  Activate Lasers
        </button>

      </header>
    </div>
  );
}

export default App;

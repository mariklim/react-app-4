import './App.css';
import React from 'react';
import {useState} from 'react'


function App() {
let textInput = React.createRef();
let textOut = React.createRef();
const [output, setOutput] = useState("Privet")


let control = false;
console.log(control)

function hiddenElement(){
  control = true;
  console.log("ciao")
  console.log(control)
  document.querySelector('.box2').style.display = "none";

}

  function f1(arg) {
    console.log('onClick works!' + arg)
    document.querySelector('#event1').innerHTML += "onClick works!" + '<br/>'
  }

  function f2() {
    console.log('onDoubleClick! works!')
    document.querySelector('.box').innerHTML += "onDoubleClick!" + '<br/>'
  }

  
  function f3() {
    console.log('onMouseMove works!')
  }

  function showInput(event) {
    console.log('onInput works!')
    console.log("event.target.value", event.target.value)
    console.log("textInput.current.value",textInput.current.value)
    textOut.current.innerHTML = textInput.current.value
    setOutput(textInput.current.value)
  }


  return (
    <div className='container'><h1>Eventi, Input </h1>

      <section>
        <h2>1. onClick</h2>
        <button onClick={()=>f1('arg 1')}>Push</button>
        <p id='event1'></p>
      </section>

      <section>
        <h2>2. doubleClick , mouseMove</h2>
        <div className="box" onDoubleClick={f2} onMouseMove={f3}></div>
      </section>

      <section>
        <h2>3. Input</h2>
        <input type="text" onInput={showInput} ref={textInput} defaultValue="ciao"/>
      <h3>Text out con innerHTML</h3>
      <p ref={textOut}></p>

      <h3>Text out con State</h3>
      <p>{output}</p>
      </section>

      
      <section>
        <h2>5. hidden/onClick</h2>
        <div className="box2">
          <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
          <button onClick={hiddenElement}>Ok</button>
        </div>
      </section>

    </div>
  )
}

export default App;

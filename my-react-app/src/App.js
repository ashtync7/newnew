import './App.css';
import React from 'react';
import Home from './Home';

function App() {
  return (

    <div id="formStuff">
      <form name="contact">
        <input type="text" id="cheeseburgers" name="name" className="input1" placeholder="Name" name="Name"></input>
        <input type="text" id="cheeseburgers" className="input2" placeholder="E-mail Address" name="Email Address"></input>
        <input type="text" id="formMessage" name="place" rows="3" placeholder="Message" name="Message"></input>
        <input name="name" type="submit" value="Send" class="sendButton" id="formButton"></input>
      </form>
    </div>
  );
}

export default App;

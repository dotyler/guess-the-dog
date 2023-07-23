import {dogImages, dogImageAnswers} from "./DogImages.js"
import './App.css';
import React from 'react';

function App() {

  const [answers, setAnswers] = React.useState([""]) 

  let index = Math.floor(Math.random() * dogImages.length)
  let randomImage = dogImages[index];

  React.useEffect(() => {

    // index = Math.floor(Math.random() * dogImages.length)
    // randomImage = dogImages[index]
    setAnswers([dogImageAnswers[index], dogImageAnswers[Math.floor(Math.random() * dogImages.length)],dogImageAnswers[Math.floor(Math.random() * dogImages.length)]].sort(()=> 0.5 - Math.random()))

  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={randomImage} className="App-logo" alt="logo" />
        <p>what dog is this</p>
        <div>
          {answers.map((answer) => (
            <button key={answer}>{answer}</button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

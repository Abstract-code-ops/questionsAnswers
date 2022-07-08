import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Question from './question.js'
import questions from './data'

function App() {

  useEffect(() =>{

  })

  return (
    <div className='background'>
      <div className='title'>
        <h1>FAQs</h1>
        <div></div>
      </div>
      <div className="container">
        {questions.map((question) => {
          return <Question {...question} />;
        })}
      </div>
    </div>
  );
}

export default App;

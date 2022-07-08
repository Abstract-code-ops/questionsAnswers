import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({id, title, info}) => {
  
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="sub-container" key={id}>
      <div className="question">
        <h3>{title}</h3>
        <button
          className="btn"
          type="button"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={showAnswer? 'answer-noShow':'answer-show'}>{info}</div>
    </div>
  );
}

export default Question

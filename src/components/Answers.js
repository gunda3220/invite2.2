import React, { useState, useEffect } from "react";

import Answer from "./Answer";

const Answers = ({ message, setScrollUpdate, setQuestionMode }) => {
  const [answerState, setAnswerState] = useState(0);

  useEffect(() => {
    const length = message.text.length;
    if (answerState === length + 1 && message.type === "answer") {
      setQuestionMode(true);
    }
    if (message.type === "question") {
      setAnswerState(1);
    }
  }, [answerState]);

  return (
    <>
      {answerState === 0 && message.type === "answer" && (
        <Answer
          text="typing"
          answerState={answerState}
          setAnswerState={setAnswerState}
          message={message}
          setScrollUpdate={setScrollUpdate}
        />
      )}
      {message.text.map((answer, index) => {
        return (
          answerState > index && (
            <Answer
              message={message}
              text={answer}
              index={index}
              key={index}
              answerState={answerState}
              setAnswerState={setAnswerState}
              setScrollUpdate={setScrollUpdate}
            />
          )
        );
      })}
    </>
  );
};

export default Answers;

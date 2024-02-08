import React from "react";
import "./Question.css";
import { answerData } from "../data/AnswerData";

const Questions = ({ question, setQuestionMode, setCurrentMessages }) => {
  const insertNextAnswer = () => {
    let nextAnswer = answerData[question.state];

    setTimeout(() => {
      setCurrentMessages((prev) => [...prev, nextAnswer]);
    }, 1000);
  };

  const questionHandler = () => {
    setQuestionMode(false);
    setCurrentMessages((prev) => [...prev, question]);
    insertNextAnswer();
  };

  return (
    <div className="question" onClick={questionHandler}>
      <p>{question.text}</p>
    </div>
  );
};

export default Questions;

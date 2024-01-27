import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Answers from "./components/Answers";

import sendIcon from "./assets/images/send.jpg";
import Input from "./components/Input";
import Question from "./components/Questions";
import { answerData } from "./data/AnswerData";
import { questionData } from "./data/AnswerData";

function App() {
  const [scrollUpdate, setScrollUpdate] = useState(0);

  const [inputMode, setInputMode] = useState(false);

  const [currentMessages, setCurrentMessages] = useState([answerData.default]);

  const [questionMode, setQuestionMode] = useState(false);

  const [currentQuestions, setCurrentQuestions] = useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [scrollUpdate]);

  useEffect(() => {
    if (questionMode === true) {
      let nextQuestions =
        currentMessages[currentMessages.length - 1].nextQuestions;
      if (nextQuestions) {
        let questions = [];
        questionData.map((item) => {
          if (nextQuestions.includes(item.state)) {
            questions.push(item);
          }
        });
        setCurrentQuestions(questions);
      } else {
        setCurrentQuestions([]);
        setQuestionMode(false);
      }
    }
    setTimeout(() => {
      const inputHeight = document.querySelector(".input-section").offsetHeight;
      const screenHeight = window.innerHeight;
      let answerSectionHeight = screenHeight - inputHeight - 15;
      document.querySelector(".answers-wrapper").style.height =
        answerSectionHeight + "px";
      scrollToBottom();
    }, 100);
  }, [questionMode]);

  return (
    <div className="App">
      <div className="screen">
        <div className="answers-wrapper">
          {currentMessages.map((message, index) => (
            <Answers
              message={message}
              key={index}
              setScrollUpdate={setScrollUpdate}
              setQuestionMode={setQuestionMode}
            />
          ))}
          <div ref={messagesEndRef} id="dummy-div" />
        </div>
        <div className="input-section">
          {!inputMode && (
            <Input
              img={sendIcon}
              questionMode={questionMode}
              inputMode={inputMode}
              setInputMode={setInputMode}
            />
          )}
          <div className="questions-section">
            {currentQuestions.map(
              (item, index) =>
                questionMode && (
                  <Question
                    key={index}
                    question={item}
                    setQuestionMode={setQuestionMode}
                    setCurrentMessages={setCurrentMessages}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

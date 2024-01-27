import React, { useEffect } from "react";
import "./Answer.css";

const Answer = ({
  text,
  type,
  answerState,
  setAnswerState,
  setScrollUpdate,
}) => {
  const renderAnswer = () => {
    if (text.includes("https://www.google.com/maps")) {
      return <iframe src={text}></iframe>;
    } else if (text.includes("jpeg")) {
      return <img src={text} />;
    } else if (text.includes("mp4")) {
      return (
        <video autoPlay muted loop>
          <source src={text} />
        </video>
      );
    } else if (text === "typing") {
      return (
        <div class="container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      );
    } else {
      return (
        <>
          {text.split("<br>").map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </>
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAnswerState((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setScrollUpdate((prev) => prev + 1);
  }, [answerState]);

  return (
    <div className={`answer ${type === "question" ? "question-message" : ""}`}>
      {renderAnswer()}
    </div>
  );
};

export default Answer;

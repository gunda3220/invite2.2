import React, { useEffect } from "react";
import "./Answer.css";
import { ReactComponent as InstaIcon } from "../assets/images/insta-icon.svg";

const Answer = ({
  text,
  message,
  answerState,
  setAnswerState,
  setScrollUpdate,
  index,
}) => {
  const urlRegex =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  const getTextType = () => {
    let textType;
    if (text.includes("https://www.google.com/maps")) {
      textType = "location";
    } else if (urlRegex.test(text)) {
      if (text.includes("instagram")) {
        textType = "instaLink";
      } else {
        textType = "link";
      }
    } else if (text.includes("jpeg")) {
      textType = "image";
    } else if (text.includes("mp4")) {
      textType = "video";
    } else {
      textType = "text";
    }
    return textType;
  };

  const getNum = (text) => {
    var regex = /[\+]?\d{10}/;
    let output = text.match(regex);
    return output[0];
  };

  const renderAnswer = () => {
    let textType = getTextType();
    if (textType === "location") {
      return <iframe src={text}></iframe>;
    } else if (textType === "instaLink") {
      return (
        <a href={text} target="_blank" className="insta-link">
          <InstaIcon />
          <p>insta profile</p>
        </a>
      );
    } else if (textType === "link") {
      return (
        <a href={text} target="_blank" className="insta-link">
          {getNum(text)}
        </a>
      );
    } else if (textType === "image") {
      return <img src={text} />;
    } else if (textType === "video") {
      return (
        <video autoPlay muted loop>
          <source src={text} />
        </video>
      );
    } else if (text === "typing") {
      return (
        <div className="container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
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
    updateAnswerState();
  }, [text]);

  useEffect(() => {
    setScrollUpdate((prev) => prev + 1);
  }, [answerState]);

  const updateAnswerState = () => {
    let textType = getTextType();
    let timeDelay;
    if (index === message.text.length - 1) {
      timeDelay = 0;
    } else {
      timeDelay =
        text.length > 30 && textType === "text" ? text.length * 15 : 1000;
    }

    setTimeout(() => {
      setAnswerState((prev) => prev + 1);
    }, timeDelay);
  };

  return (
    <>
      <div
        className={`answer ${
          message.type === "question" ? "question-message" : ""
        } ${getTextType() === "link" ? "link-answer" : ""}`}
      >
        {renderAnswer()}
      </div>
      {message.type === "answer" &&
        index + 1 >= answerState &&
        index < message.text.length - 1 && (
          <div className="answer">
            <div className="container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
    </>
  );
};

export default Answer;

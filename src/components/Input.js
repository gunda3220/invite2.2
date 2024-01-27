import React from "react";
import "./Input.css";

const Input = ({ questionMode, img, inputMode }) => {
  const formHandler = (e) => {
    e.preventDefault();
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzxAAfmlT0LmpgZ3sQIFNsf0X494jHfXllXYl3ztn5F4LbQspJtN6SdLA/exec";
    const form = document.forms["google-sheet"];
    fetch(scriptUrl, { method: "POST", body: new FormData(form) })
      // .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      // .then(response => location.reload())
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div className="input">
      {inputMode ? (
        <form onSubmit={formHandler} name="google-sheet">
          <input
            type="text"
            name="details"
            placeholder="Please enter your details"
          />
          <button type="submit">
            <img src={img} alt="" />
          </button>
        </form>
      ) : (
        <div className="entry-bar">
          <p>{questionMode ? "Choose from Below" : "Please Wait..."}</p>
          <img src={img} alt="" />
        </div>
      )}
    </div>
  );
};

export default Input;

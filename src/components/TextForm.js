import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const handleUpclick = () => {
    // console.log("Function Worked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your Text Converted into UpperCase", "success");
  };
  const handleloclick = () => {
    // console.log("Function Worked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your Text Converted into Lowercase", "success");
  };
  const handleclearclick = () => {
    // console.log("Function Worked"+text);
    let newText = "";
    setText(newText);
    props.showAlert("Text box is Cleared", "success");
  };
  const handleonchange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };

  return (
    <>
      <div
        container=""
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4" >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="TextForm"
            style={{
              backgroundColor: props.mode === "dark" ? "#011823" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleonchange}
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>
          Conert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>
          Conert To Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>your text summary</h2>
        <p>
          <strong>words={text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  AND character={text.length}</strong>
        </p>
        <p><strong>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</strong></p>
        <h2>Preview</h2>
        <p><em>{text}</em></p>
      </div>
    </>
  );
}

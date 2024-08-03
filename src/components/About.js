import React from "react";
// import { useState } from "react";
export default function About(props) {
  let myStyle={
    color: props.mode=== 'dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'#042743':'white'
  }
  let Bstyle={
    color: props.mode=== 'dark'?'white':'rgb(27 79 129)',
    backgroundColor:props.mode==='dark'?'rgb(27 79 129)':'white'
  }
  return (
    <>
      
      <div className="accordion" style={myStyle} id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={Bstyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyze Your Text #1</strong>
            </button>
          </h2>
          <div style={myStyle}
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
             It is a Simple Text Analyzer , which mutilates your text, but in a tender way
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={Bstyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Free To Use #2</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
            It is completely free to use. No credit cards required. Use as much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={Bstyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Browser Compatible #3</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
            It is compatible with all of your favorite browsers.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

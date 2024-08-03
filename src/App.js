import "./App.css";

import Alert1 from "./components/Alert1";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
  Routes,
} from "react-router-dom";

import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("The Dark mode is On", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("The Light mode is On", "success");
    }
  };
  return (
    <> 
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert1 alert={alert}/>
      <div className='container my-3'>
      <Switch>
            <Route exact path="/about">
              element={<About/>}
            </Route>
          
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter The Text Below To analyze" mode={mode}/>
          </Route>
      </Switch>
          
      </div> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert1 alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm 
                  heading="Try TextUtils: Word Counter, Character Counter,Conversion "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

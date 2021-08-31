import React from "react";
import "./App.css";
import CenterBox from "./components/CenterBox";
import ButtonAppBar from "./components/MenuBar";
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      {/* <CenterBox></CenterBox> */}
      <Form></Form>
    </div>
  );
}

export default App;

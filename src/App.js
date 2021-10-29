import React from "react";
import "./App.css";
import CenterBox from "./components/CenterBox";
import ButtonAppBar from "./components/MenuBar";
import Form from "./components/Form"
import Form2 from "./components/Form2";
import Verification from "./components/Verification";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      {/* <CenterBox></CenterBox> */}
      <Form></Form>
      <Form2></Form2>
      <Verification></Verification>
    </div>
  );
}

export default App;

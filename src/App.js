import React from "react";
import AppWrapper from "./AppWrapper/AppWrapper";
import WorkOutContext from "./AppWrapper/AppWrapper";

function App() {
  return (
    <WorkOutContext>
      <AppWrapper />
    </WorkOutContext>
  );
}

export default App;

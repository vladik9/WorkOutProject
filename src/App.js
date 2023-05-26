import React from "react";
import WorkOutContextWrapper from "./Exercises/WorkoutContext/WorkOutContextWrapper";
import AppWrapper from "./Exercises/AppWrapper/AppWrapper";
import Nutrition from "./Nutrition/Nutrition";

function App() {
  return (
    <WorkOutContextWrapper>
      <Nutrition />
      {/* <AppWrapper /> */}
    </WorkOutContextWrapper>
  );
}

export default App;

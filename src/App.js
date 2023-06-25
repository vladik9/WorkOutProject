import React from "react";
import WorkOutContextWrapper from "./Exercises/WorkoutContext/WorkOutContextWrapper";
import AppWrapper from "./Exercises/AppWrapper/AppWrapper";
import NewExercise from "./NewExercise/NewExercise";
import "./App.module.css";
import Nutrition from "./Nutrition/Nutrition";

function App() {
  return (
    <WorkOutContextWrapper>
      <Nutrition />
      <AppWrapper />

      <NewExercise />
    </WorkOutContextWrapper>
  );
}

export default App;

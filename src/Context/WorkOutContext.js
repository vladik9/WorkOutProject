import React, { createContext, useState } from "react";
import week1 from "../weeksExercises/exercise/week1";
import week2 from "../weeksExercises/exercise/week2";
import week3 from "../weeksExercises/exercise/week3";
import week4 from "../weeksExercises/exercise/week4";
import week5 from "../weeksExercises/exercise/week5";
import week6 from "../weeksExercises/exercise/week6";
import week7 from "../weeksExercises/exercise/week7";
import week8 from "../weeksExercises/exercise/week8";

const programedWeeks = [
  "Week1",
  "Week2",
  "Week3",
  "Week4",
  "Week5",
  "Week6",
  "Week7",
  "Week8",
];

// var uiqueId = require("uniqid");
const exerciseObject = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
  ...week5,
  ...week6,
  ...week7,
  ...week8,
];

export const WorkOutContextObject = createContext({
  exerciseObject: "",
  programedWeeks: "",
  selectedWeekNumber: "",
  setselectedWeekNumber: () => {},
  isOpen: "",
  setIsOpen: () => {},
  currentExercise: "",
  setCurrentExercise: () => {},
  handleModalExecute: () => {},
  setWeekDaySelected: () => {},
});

export default function WorkOutContext(props) {
  const [selectedWeekNumber, setselectedWeekNumber] = useState(
    programedWeeks[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({
    link: "",
    nbOfSets: "",
    category: "",
  });
  const handleModalExecute = (exerciseLink, repetitions, history, exercise) => {
    setCurrentExercise({
      link: exerciseLink,
      nbOfSets: repetitions,
      history: history,
      exerciseName: exercise,
    });
    console.log(currentExercise);
    setIsOpen(true);
  };
  const setWeekDaySelected = (weekDaySelected) => {
    setselectedWeekNumber(weekDaySelected);
  };
  return (
    <WorkOutContextObject.Provider
      value={{
        exerciseObject,
        programedWeeks,
        selectedWeekNumber,
        setselectedWeekNumber,
        isOpen,
        setIsOpen,
        currentExercise,
        setCurrentExercise,
        handleModalExecute,
        setWeekDaySelected,
      }}
    >
      {props.children}
    </WorkOutContextObject.Provider>
  );
}

import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import InfoModal from "./InfoModal/InfoModal";
import appStyle from "./App.module.css";
import week1 from "./weeksExercises/week1";
import week2 from "./weeksExercises/week2";
import week3 from "./weeksExercises/week3";

import Navigator from "./Navigator/Navigator";
import Modal from "./Cards/Exercise/Modal/Modal";
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
const exerciseObject = [...week1, ...week2, ...week3];
function App() {
  const [selectedWeekNumber, setselectedWeekNumber] = useState(
    programedWeeks[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({
    link: "",
    nbOfSets: "",
    category: "",
  });
  const handleModalExecute = (exerciseLink, repetitions) => {
    setCurrentExercise({ link: exerciseLink, nbOfSets: repetitions });
    setIsOpen(true);
  };
  const setWeekDaySelected = (weekDaySelected) => {
    setselectedWeekNumber(weekDaySelected);
  };

  return (
    <>
      <div className={appStyle.infoModalStyle}>
        <InfoModal />
      </div>
      <div className={navStyles.navigatorPosition}>
        {programedWeeks.map((item) => (
          <Navigator
            key={item}
            weekNumber={item}
            setWeekDaySelected={setWeekDaySelected}
            selectedWeekNumber={selectedWeekNumber}
          />
        ))}
      </div>

      <div className={styles.currentWeekStyle}>{selectedWeekNumber}</div>
      <div className={styles.cardWrapper}>
        <Cards
          dataObject={exerciseObject.filter((el) => {
            return el.weekNumber === selectedWeekNumber;
          })}
          handleModalExecute={handleModalExecute}
        />
      </div>
      <main>
        {isOpen && (
          <Modal currentExercise={currentExercise} setIsOpen={setIsOpen} />
        )}
      </main>
    </>
  );
}

export default App;

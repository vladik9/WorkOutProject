import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import exerciseObject from "./weeksExercises/week2";
import Navigator from "./Navigator/Navigator";
import Modal from "./Cards/Exercise/Modal/Modal";
const programedWeeks = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
];
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
          dataObject={exerciseObject}
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

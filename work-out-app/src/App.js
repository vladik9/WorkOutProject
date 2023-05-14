import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import InfoModal from "./RestModal/RestModal";
import appStyle from "./App.module.css";
import {
  exerciseObject,
  programedWeeks,
} from "./weeksExercises/exerciseObject";

import Navigator from "./Navigator/Navigator";
import Modal from "./Cards/Exercise/Modal/Modal";

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

      <div className={styles.currentWeekStyle}>
        Week {selectedWeekNumber.charAt(selectedWeekNumber.length - 1)}
      </div>
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

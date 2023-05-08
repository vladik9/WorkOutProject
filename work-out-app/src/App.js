import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import exerciseObject from "./exercisesObject";
import { weeksDays } from "./exercisesObject";
import Navigator from "./Navigator/Navigator";
import Modal from "./Cards/Exercise/Modal/Modal";
function App() {
  const [selectedWeekNumber, setselectedWeekNumber] = useState(weeksDays[0]);
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
        {weeksDays.map((item) => (
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

import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import exerciseObject from "./exercisesObject";
import { weeksDays } from "./exercisesObject";
import Navigator from "./Navigator/Navigator";
import Modal from "./Cards/Exercise/Modal/Modal";
function App() {
  const [currentWeekNumber, setCurrentWeekNumber] = useState(weeksDays[0]);
  const [currentExercise, setCurrentExercise] = useState({
    link: "",
    nbOfSets: "",
    category: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleModalExecute = (exerciseLink, repetitions) => {
    setCurrentExercise({ link: exerciseLink, nbOfSets: repetitions });
    setIsOpen(true);
  };
  return (
    <>
      <div className={navStyles.navigatorPosition}>
        {weeksDays.map((el) => (
          <Navigator key={el} weekNumber={el} />
        ))}
      </div>
      <div className={styles.currentWeekStyle}>{currentWeekNumber}</div>
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

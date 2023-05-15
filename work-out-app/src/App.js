import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import InfoModal from "./Modals/RestModal/RestModal";
import TableModal from "./Modals/TableModal/TableModal";
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
  const [isTableModalOpen, setOpenTableModal] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({
    link: "",
    nbOfSets: "",
    category: "",
  });
  const [currentDayExercises, setCurrentDayExercises] = useState([]);

  const handleModalExecuteShowTable = (day) => {
    console.log("🚀 ~ file: App.js:29 ~ App ~ currentDayExercises:", day);
    setCurrentDayExercises(day);
    setOpenTableModal(true);
  };

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
          handleModalExecuteShowTable={handleModalExecuteShowTable}
        />
      </div>
      <main>
        {isOpen && (
          <Modal currentExercise={currentExercise} setIsOpen={setIsOpen} />
        )}
        {isTableModalOpen && (
          <TableModal
            dataObject={exerciseObject.filter((el) => {
              return el.weekNumber === selectedWeekNumber;
            })}
            setOpenTableModal={setOpenTableModal}
            currentDayExercises={currentDayExercises}
          />
        )}
      </main>
    </>
  );
}

export default App;

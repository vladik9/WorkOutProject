import React, { useContext } from "react";
import Cards from "../Cards/Cards";
import styles from "../Cards/Cards.module.css";
import navStyles from "../Navigator/Navigator.module.css";
import InfoModal from "../Modals/RestModal/RestModal";
import appStyle from "../App.module.css";
import Navigator from "../Navigator/Navigator";
import Modal from "../Cards/Exercise/Modal/ExerciseModal";
import { WorkOutContextObject } from "../Context/WorkOutContext";

function AppWrapper() {
  const ctx = useContext(WorkOutContextObject);
  console.log(ctx);
  return (
    <>
      <div className={appStyle.infoModalStyle}>
        <InfoModal />
      </div>
      <div className={navStyles.navigatorPosition}>
        {ctx.programedWeeks.map((item) => (
          <Navigator
            key={item}
            weekNumber={item}
            setWeekDaySelected={ctx.setWeekDaySelected}
            selectedWeekNumber={ctx.selectedWeekNumber}
          />
        ))}
      </div>

      <div className={styles.currentWeekStyle}>
        Week {ctx.selectedWeekNumber.charAt(ctx.selectedWeekNumber.length - 1)}
      </div>
      <div className={styles.cardWrapper}>
        <Cards
          dataObject={ctx.exerciseObject.filter((el) => {
            return el.weekNumber === ctx.selectedWeekNumber;
          })}
          handleModalExecute={ctx.handleModalExecute}
        />
      </div>
      <main>
        {ctx.isOpen && (
          <Modal
            currentExercise={ctx.currentExercise}
            setIsOpen={ctx.setIsOpen}
          />
        )}
      </main>
    </>
  );
}

export default AppWrapper;

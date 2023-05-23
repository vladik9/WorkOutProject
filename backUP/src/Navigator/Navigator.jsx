import React from "react";
import styles from "./Navigator.module.css";
export default function Navigator({
  weekNumber,
  selectedWeekNumber,
  setWeekDaySelected,
}) {
  return (
    <div
      id={weekNumber}
      style={{
        backgroundColor: weekNumber === selectedWeekNumber ? "yellow" : "",
      }}
      className={styles.navigatorElement}
      onClick={(event) => {
        setWeekDaySelected(event.target.id);
      }}
    >
      Week {weekNumber.charAt(weekNumber.length - 1)}
    </div>
  );
}

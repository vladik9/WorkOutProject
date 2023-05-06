import React, { useState } from "react";
import styles from "./Navigator.module.css";
export default function Navigator({ weekNumber }) {
  const [weekDaySelected, setWeekDaySelected] = useState("Week 1");

  return (
    <div
      id={weekNumber}
      className={styles.navigatorElement}
      onClick={(event) => {
        setWeekDaySelected(event.target.id);
      }}
    >
      {weekNumber}
    </div>
  );
}

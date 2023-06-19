import React, { useContext, useState } from "react";
import styles from "./BodyPart.module.css";
import { WorkOutContextObject } from "../../Exercises/WorkoutContext/WorkOutContextWrapper";

export default function BodyPart({ bodyPart }) {
  const [selectedPart, setSelectedBodyPart] = useState(0);
  const ctx = useContext(WorkOutContextObject);
  return (
    <div
      id={bodyPart}
      style={{
        backgroundColor: bodyPart === ctx.selectedWeekNumber ? "yellow" : "",
      }}
      className={styles.bodyPart}
      onClick={(event) => {
        ctx.setWeekDaySelected(event.target.id);
      }}
    >
      {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
    </div>
  );
}

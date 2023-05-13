import React from "react";
import Exercise from "../Exercise/Exercise";
import styles from "./Card.module.css";
export default function Card({ exerciseObject, handleModalExecute }) {
  return (
    <div className={styles.contentWraper}>
      <div className={styles.tileStyle}>
        <h3>{exerciseObject.day}</h3>
        <h4> {exerciseObject.bodyPart}</h4>
      </div>
      {exerciseObject.exercises.map((el, index) => {
        return (
          <div key={el.exId}>
            <Exercise
              exercise={el}
              handleModalExecute={handleModalExecute}
              exerciseIndex={index}
            />
          </div>
        );
      })}
    </div>
  );
}

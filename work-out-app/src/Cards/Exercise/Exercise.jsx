import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./Exercise.module.css";
export default function Exercise({ exercise, handleModalExecute }) {
  return (
    <>
      <div className={styles.postinTest}>{exercise.exercise}</div>
      <strong
        onClick={() => handleModalExecute(exercise.link, exercise.repetisions)}
        className={styles.exerciseRepetitions}
      >
        {exercise.repetisions}
        <div href={exercise.link} className={styles.iconStle}>
          <AiOutlineInfoCircle />
        </div>
      </strong>
    </>
  );
}

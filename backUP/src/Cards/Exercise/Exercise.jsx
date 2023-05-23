import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import styles from "./Exercise.module.css";
export default function Exercise({
  exercise,
  handleModalExecute,
  exerciseIndex,
}) {
  return (
    <>
      <div className={styles.elementSize}>
        {exerciseIndex + 1} {exercise.exercise}
      </div>
      <strong
        onClick={() =>
          handleModalExecute(
            exercise.link,
            exercise.repetisions,
            exercise.weightHistory,
            exercise.exercise
          )
        }
        className={styles.exerciseRepetitions}
      >
        {exercise.repetisions}
        <div href={exercise.link} className={styles.iconStle}>
          <sup>
            <BsBoxArrowUpRight />
          </sup>
        </div>
      </strong>
    </>
  );
}

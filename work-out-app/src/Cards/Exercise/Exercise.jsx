import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./Exercise.module.css";
export default function Exercise({ exercise }) {
  return (
    <div>
      <div>
        {exercise.exercise}
        <span>
          <strong> {exercise.repetisions}</strong>
        </span>
        <a
          href={exercise.link}
          className={styles.iconStle}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInfoCircle />
        </a>
      </div>
    </div>
  );
}

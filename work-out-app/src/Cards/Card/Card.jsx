import React from "react";
import Exercise from "../Exercise/Exercise";
import styles from "./Card.module.css";
export default function Card({ data }) {
  return (
    <div className={styles.contentWraper}>
      <div className={styles.tileStyle}>
        <h3>{data.day}</h3>
        <h4> {data.bodyPart}</h4>
      </div>
      {data.exercises.map((el) => {
        return (
          <div key={el.exId}>
            <Exercise exercise={el} />
          </div>
        );
      })}
    </div>
  );
}

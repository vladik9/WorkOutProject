import React from "react";
import styles from "./InfoModal.module.css";
import { RiErrorWarningFill } from "react-icons/ri";
export default function InfoModal() {
  return (
    <div className={(styles.modalWrapper, styles.infoModalStyleContainer)}>
      <div className={styles.modalMainContent}>
        <div>
          <RiErrorWarningFill className={styles.warningMessage} />
          Rest betweeb sets in the basic exercise (squat/bench press/ deadlift){" "}
          <strong>4 min</strong>
        </div>
        <div className={styles.modalContent}>
          Between other sets <strong>2 min</strong>
        </div>
        <div className={styles.modalContent}>
          Between exercises <strong>3 min</strong>
        </div>
      </div>
    </div>
  );
}

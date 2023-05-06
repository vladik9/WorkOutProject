import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ currentExercise, setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>
              Exercise:
              <strong> {currentExercise.nbOfSets}</strong>
            </h5>
          </div>
          <div className={styles.modalContent}>
            <img
              className={styles.modalImage}
              src={currentExercise.link}
              alt="GIF"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;

import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, link, repetitions }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{repetitions}</h5>
          </div>

          <div className={styles.modalContent}>
            <a href={link}>123</a>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;

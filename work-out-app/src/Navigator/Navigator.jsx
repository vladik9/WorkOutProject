import React from "react";
import styles from "./Navigator.module.css";
export default function Navigator({ weekNumber }) {
  return <div className={styles.navigatorElement}>{weekNumber}</div>;
}

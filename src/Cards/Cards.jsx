import React from "react";
import Card from "./Card/Card";
export default function Cards({ dataObject, handleModalExecute }) {
  return dataObject.map((el) => {
    return (
      <div key={el.id}>
        <Card exerciseObject={el} handleModalExecute={handleModalExecute} />
      </div>
    );
  });
}

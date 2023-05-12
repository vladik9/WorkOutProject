import React from "react";
import Card from "./Card/Card";
export default function Cards({ dataObject, handleModalExecute }) {
  return dataObject.map((el) => {
    return (
      <div key={el.id}>
        <Card data={el} handleModalExecute={handleModalExecute} />
      </div>
    );
  });
}

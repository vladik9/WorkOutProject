import React from "react";
import Card from "./Card/Card";
export default function Cards({ data }) {
  return data.map((el) => {
    return (
      <div key={el.id}>
        <Card data={el} />
      </div>
    );
  });
}

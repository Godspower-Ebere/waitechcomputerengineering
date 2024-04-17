import React, { useRef } from "react";
import useFilterElement from "react-filter-element";

export const Filter = () => {
  const parent = useRef(null);
  const [filter, items] = useFilterElement(parent);
  const products = [{}];
  return (
    <div>
      <button onClick={() => filter("bird")}>Birds</button>
      <button onClick={() => filter("fish")}>Fish</button>

      <div ref={parent}>
        <div className="bird">
          <h1>Bird</h1>
        </div>
        <div className="fish">
          <h1>Fish</h1>
        </div>
      </div>
    </div>
  );
};

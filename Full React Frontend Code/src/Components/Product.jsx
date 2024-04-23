import React, { useRef } from "react";
import useFilterElement from "react-filter-element";
import { Link } from "react-router-dom";
import { Keyboard } from "./Keyboard";
import { Laptops } from "./Laptops";
import { Mouse } from "./Mouse";
const Product = () => {
  const parent = useRef(null);
  const [filter, items] = useFilterElement(parent); // calling the hook w
  return (
    <div>
      <div className="buttons flex w-full justify-center my-3">
        <div className="flex-col md:flex-row flex">
          <button
            className="btn m-1 btn-primary"
            onClick={() => filter("laptop")}
          >
            Laptops
          </button>
          <button
            className="btn m-1 btn-primary"
            onClick={() => filter("keyboard")}
          >
            Keyboards
          </button>
          <button
            className="btn m-1 btn-primary"
            onClick={() => filter("mouse")}
          >
            Mouses
          </button>
          <button className="btn m-1 btn-primary">
            <Link to="/contact">Contanct us for more info</Link>
          </button>
        </div>
      </div>
      <div ref={parent}>
        <div className="laptop">
          <Laptops></Laptops>
        </div>
        <div className="keyboard">
          <Keyboard></Keyboard>
        </div>
        <div className="mouse">
          <Mouse></Mouse>
        </div>
      </div>
    </div>
  );
};

export default Product;

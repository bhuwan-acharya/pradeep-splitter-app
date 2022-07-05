import React from "react";
import { buttons } from "../buttons";
import { useGlobalContext } from "../context/AppContext";

const Button = () => {
  const { setTip, activeID, setActiveID } = useGlobalContext();

  function toggleActive(e) {
    e.preventDefault();
    setActiveID(e.target.id);
    setTip(e.target.value);
  }

  return (
    <>
      {buttons.map((item, i) => {
        const { value, id } = item;
        return (
          <button
            id={id}
            className={`${activeID === id ? "active-amount" : "amount"}`}
            key={i}
            value={value}
            onClick={(e) => {
              toggleActive(e);
            }}
          >
            {value}%
          </button>
        );
      })}
    </>
  );
};

export default Button;

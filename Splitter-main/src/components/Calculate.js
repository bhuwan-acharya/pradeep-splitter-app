import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/AppContext";
import Button from "./Button";

const Calculate = () => {
  const {
    amount,
    setAmount,
    tip,
    setTip,
    people,
    setPeople,
    setTipPP,
    setTotalPP,
  } = useGlobalContext();

  function result() {
    if (amount != null && tip != null && people != 0) {
      let tip_per_person = ((tip / 100) * amount) / people;
      let total_per_person = ((1 + tip / 100) * amount) / people;
      setTipPP(tip_per_person);
      setTotalPP(total_per_person);
    }
  }

  useEffect(() => {
    result();
  }, [people, amount, tip]);

  return (
    <section className="calculate-section">
      <form className="total-bill">
        <label htmlFor="bill-amount">Bill</label>
        <input
          type="number"
          id="bill-amount"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <article id="tip-select">
        <header id="select-tip">Select Tip %</header>
        <form className="tip-amounts">
          <Button />
          <input
            type="number"
            className="custom-tip"
            placeholder="Custom"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </form>
      </article>
      <form className="number-of-people">
        <div className="label-container">
          <label htmlFor="total-people">Number of people</label>
          {people == 0 && people != "" && (
            <label className="error-label">Can't be zero</label>
          )}
        </div>
        <input
          type="number"
          className={`${
            people == 0 && people != ""
              ? "total-people input-field input-error-field"
              : " total-people input-field "
          }`}
          placeholder="0"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Calculate;

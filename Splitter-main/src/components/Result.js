import React from "react";
import { useGlobalContext } from "../context/AppContext";

const Result = () => {
  const {
    tipPP,
    totalPP,
    people,
    amount,
    tip,
    setAmount,
    setTip,
    setPeople,
    setTipPP,
    setTotalPP,
    setActiveID,
  } = useGlobalContext();
  return (
    <section className="result-section">
      <article id="final-total-pp">
        <div className="tip-amount-pp">
          <span>
            <p className="tip">Tip Amount</p>
            <p className="pp">/ person</p>
          </span>
          <h3>${tipPP.toFixed(2)}</h3>
        </div>
        <div className="total-amount-pp">
          <span>
            <p className="total">Total</p>
            <p className="pp">/ person</p>
          </span>
          <h3>${totalPP.toFixed(2)}</h3>
        </div>
        <div className="btn-container">
          <button
            className={`${
              people != "" || tip != "" || amount != ""
                ? "reset-btn"
                : "reset-btn noHover"
            }`}
            onClick={() => {
              setAmount(0);
              setTip("");
              setPeople(0);
              setTipPP(0);
              setTotalPP(0);
              setActiveID();
            }}
          >
            RESET
          </button>
        </div>
      </article>
    </section>
  );
};

export default Result;

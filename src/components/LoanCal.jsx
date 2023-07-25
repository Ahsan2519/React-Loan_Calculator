import React, { useState } from "react";

const LoanCal = () => {
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [intrest, setIntrest] = useState("");
  const [total, setTotal] = useState("");

  const setData = (e) => {
    e.target.name === "amount"
      ? setAmount(e.target.value)
      : e.target.name === "year"
      ? setYear(e.target.value)
      : setTerm(e.target.value);
  };

  const submitEvent = (e) => {
    e.preventDefault();
  };

  const emiHandler = () => {
    const calculatedIntrest = (amount * year * term) / 100;
    const calculatedTotal = +amount + calculatedIntrest;
    setIntrest(calculatedIntrest.toString());
    setTotal(calculatedTotal.toString());
  };

  return (
    <>
    <h1 className="bg-slate-800 text-white p-2 text-center text-xl font-bold">Simple Loan Calculator Using React</h1>
    <div className="border-2 border-blue-800 w-1/2 mt-36 mx-auto">
      <form onSubmit={submitEvent} className="w-full p-10">
        <div className="w-full flex mb-4 justify-between">
          <label htmlFor="amount" className="font basis-[31%]">Loan amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            required
            onChange={setData}
            className="input-styling"
          />
        </div>
        <div className="w-full flex mb-4 justify-between">
          <label htmlFor="year" className="font basis-[31%]">Loan term in years:</label>
          <input
            type="number"
            id="term"
            name="year"
            required
            onChange={setData}
            className="input-styling"
          />
        </div>
        <div className="w-full flex mb-4 justify-between">
          <label htmlFor="term" className="font basis-[31%]">intrest rate per year:</label>
          <input
            type="number"
            id="term"
            name="term"
            required
            onChange={setData}
            className="input-styling"
          />
        </div>
        <div>
          <input type="submit" value="Calculate" onClick={emiHandler} className="font bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all" />
        </div>
      </form>
      <div className="p-10">
        <span className="font">Total Intrest Paid: {intrest} </span>
        <span className="font block">Total Amount Paid: {total} </span>
      </div>
    </div>
    </>
  );
};
export default LoanCal;

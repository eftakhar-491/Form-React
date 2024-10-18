import React, { useState } from "react";

export default function Form({ setAllData }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();

  function add(e) {
    e.preventDefault();
    const data1 = {
      title,
      category,
      amount,
    };

    setAllData((pre) => [...pre, { ...data1, id: crypto.randomUUID() }]);
  }

  return (
    <>
      <form className="mt-7 mx-auto flex gap-4 flex-col w-11/12 lg:w-1/2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border-2"
          type="text"
          placeholder="Title"
        />
        <select
          className="border-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" hidden>
            Select a Category
          </option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
        <input
          onChange={(e) => setAmount(e.target.value)}
          className="border-2"
          type="number"
          placeholder="Amount"
        />
        <button onClick={add} className="bg-slate-400 mb-4">
          Add
        </button>
      </form>
    </>
  );
}

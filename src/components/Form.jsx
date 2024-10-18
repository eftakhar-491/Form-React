import React, { useContext, useEffect, useState } from "react";
import { edit } from "../context/edit";

export default function Form({ setAllData, allData }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();
  const x = useContext(edit);
  useEffect(() => {
    setTitle(x.editData[0]?.title);
    setCategory(x.editData[0]?.category);
    setAmount(x.editData[0]?.amount);
  }, [x.editData]);
  function add(e) {
    e.preventDefault();

    const data1 = {
      title,
      category,
      amount,
    };
    console.log(data1, x.au);
    if (x.au === "add") {
      setAllData((pre) => [...pre, { ...data1, id: crypto.randomUUID() }]);
    } else {
      setAllData(
        (pre) =>
          pre
            .filter((item) => item.id !== x.editData[0].id) // Filter out the item to update
            .concat({ ...data1, id: x.editData[0].id }) // Add updated item using spread operator
      );

      // setAllData((pre) =>
      //   pre.filter((item) =>
      //     item.id === x.editData[0].id ? { ...data1, id: item.id } : item
      //   )
      // );
      x.setAu("add");
    }
    setTitle("");
    setCategory("");
    setAmount("");
  }

  return (
    <>
      <h1 className="text-center mt-3 text-2xl font-bold text-orange-500">
        Add, Update, Delete data FORM
      </h1>
      <form className="mt-7 mx-auto flex gap-4 flex-col w-11/12 lg:w-1/2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2"
          type="text"
          placeholder="Title"
        />
        <select
          value={category}
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
          value={amount}
        />
        <button onClick={add} className="bg-slate-400 mb-4">
          {x.au == "add" ? "Add" : "Update"}
        </button>
      </form>
    </>
  );
}

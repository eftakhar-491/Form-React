import React, { useContext } from "react";
import { edit } from "../context/edit";

export default function Menu({ setEd, ed, setAllData, allData }) {
  console.log(ed);
  function del() {
    setEd({ isShow: false });
    setAllData(allData.filter((item) => item.id !== ed.data[0].id));
  }
  let x = useContext(edit);
  console.log(x);
  return (
    <section className="absolute " style={ed.style}>
      <div className="bg-white p-2 flex flex-col shadow-md w-fit">
        <button className="border-2">Edit</button>
        <button onClick={() => del()} className="border-2">
          Delete
        </button>
      </div>
    </section>
  );
}

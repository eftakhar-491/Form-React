import React, { useContext, useEffect } from "react";
import { edit } from "../context/edit";

export default function Menu({ setEd, ed, setAllData, allData }) {
  const x = useContext(edit);

  function del() {
    setEd({ isShow: false });
    setAllData(allData.filter((item) => item.id !== ed.data[0].id));
  }

  function editx() {
    setEd({ isShow: false });
    x.setEditData(ed.data);
    x.setAu("edit");
  }

  return (
    <section className="absolute " style={ed.style}>
      <div className="bg-white p-2 flex flex-col shadow-md w-fit">
        <button onClick={() => editx()} className="border-2">
          Edit
        </button>
        <button onClick={() => del()} className="border-2">
          Delete
        </button>
      </div>
    </section>
  );
}

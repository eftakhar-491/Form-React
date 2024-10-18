import React, { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Table({ allData, setAllData }) {
  const [sort, setSort] = useState("all");
  const [sortRender, setSortRender] = useState([]);
  const [ed, setEd] = useState({ isShow: false, data: [], style: {} });
  const x = [...allData];
  useEffect(() => {
    setSortRender(x.filter((item) => item.category === sort));
  }, [sort, allData]);

  function menu(id, e) {
    setEd({
      isShow: true,
      data: x.filter((item) => item.id === id),
      style: { display: "block", left: e.clientX, top: e.clientY },
    });
  }
  return (
    <>
      {ed.isShow && (
        <Menu setEd={setEd} ed={ed} allData={allData} setAllData={setAllData} />
      )}
      <table className="mx-auto border-2 w-11/12 lg:w-1/2">
        <thead>
          <tr>
            <td className="border-2">Title</td>
            <td className="border-2">
              <select
                className="w-full"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="all">All</option>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </td>
            <td className="border-2">Amount</td>
          </tr>
        </thead>
        <tbody>
          {sortRender.length === 0
            ? allData?.map(({ id, title, category, amount }) => {
                return (
                  <tr
                    key={id}
                    onContextMenu={(e) => {
                      e.preventDefault();

                      menu(id, e);
                    }}
                  >
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{amount}</td>
                  </tr>
                );
              })
            : sortRender?.map(({ id, title, category, amount }) => {
                return (
                  <tr
                    key={id}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      console.log(id);
                      menu(id, e);
                    }}
                  >
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>{amount}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}

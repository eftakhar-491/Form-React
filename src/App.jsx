import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { edit } from "./context/edit";
function App() {
  const [allData, setAllData] = useState([]);
  const [editData, setEditData] = useState([{}]);
  const [au, setAu] = useState("add");

  useEffect(() => {
    if (allData.length !== 0) {
      localStorage.setItem("L-data", JSON.stringify(allData));
    }
  }, [allData]);
  useEffect(() => {
    setAllData(JSON.parse(localStorage.getItem("L-data") || "[]"));
  }, []);

  return (
    <edit.Provider value={{ editData, setEditData, au, setAu }}>
      <Form setAllData={setAllData} allData={allData} />

      <Table allData={allData} setAllData={setAllData} />
    </edit.Provider>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

export default function Modal({
  chart,
  pedigree,
  setModalVisible,
  setMenuVisible,
}) {
  const [sex, setSex] = useState("unknown");
  const [type, setType] = useState("");
  const [connect, setConnect] = useState("partnership");
  const [x, setX] = useState(260)
  const [y, setY] = useState(160)

  function changeSex(event) {
    setSex(event.target.value);
  }
  function changeType(event) {
    setType(event.target.value);
  }
  function changeConnect(event) {
    setConnect(event.target.value);
  }
  function createPedigree() {
    const newPedigree = chart.create(sex, x, y);
    if (type !== "") {
      switch (type) {
        case "proband":
          newPedigree.setProband(true);
          break;
        case "deceased":
          newPedigree.setDeceased(true);
          break;
        case "pregnant":
          newPedigree.setPregnancy(true);
          break;
        case "multiple":
          newPedigree.setMultipleIndividuals(true, 4);
          break;
      }
    }
    chart.connect(pedigree, newPedigree, connect);
  }

  return (
    <div className="modal">
      <h2>Create a new pedigree</h2>
      <label className="label">
        <p>Sex</p>
        <select onChange={changeSex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option selected value="unknown">
            Unknown
          </option>
        </select>
      </label>
      <label className="label">
        <p>Type</p>
        <select onChange={changeType}>
          <option selected value="">
            Standard
          </option>
          <option value="proband">Proband</option>
          <option value="deceased">Deceased</option>
          <option value="multiple">Multiple</option>
          <option value="pregnant">Pregnant</option>
        </select>
      </label>
      <label className="label">
        <p>Connection</p>
        <select onChange={changeConnect}>
          <option selected value="partnership">
            Partnership
          </option>
          <option value="separation">Separation</option>
          <option value="consanguineous">Consanguineous</option>
          <option value="sibling">Siblings</option>
        </select>
      </label>
      <label className="label">
        <p>Starting X position</p>
        <input type="number" onChange={(e)=>setX(Number(e.target.value))} defaultValue={x}></input>
      </label>
      <label className="label">
        <p>Starting Y position</p>
        <input type="number" onChange={(e)=>setY(Number(e.target.value))} defaultValue={y} ></input>
      </label>
      <br />
      <div className="buttons">
        <button
          onClick={() => {
            setModalVisible(false);
            setMenuVisible(false);
          }}
          className="close"
        >
          <p>Close</p>
        </button>
        <button
          onClick={() => {
            createPedigree();
            setModalVisible(false);
            setMenuVisible(false);
          }}
          className="create"
        >
          <p>Create</p>
        </button>
      </div>
    </div>
  );
}

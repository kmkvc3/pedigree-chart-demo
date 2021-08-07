import React, { useState } from "react";
import "./App.css";

export default function Modal({ chart, pedigree, setModalVisible }) {
  const [sex, setSex] = useState("unknown");
  const [type, setType] = useState("");
  const [connect, setConnect] = useState("sibling");

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
    const newPedigree = chart.create(sex, 260, 100);
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
          <option value="partnership">Partnership</option>
          <option value="separation">Separation</option>
          <option value="consanguineous">Consanguineous</option>
          <option selected value="sibling">
            Siblings
          </option>
        </select>
      </label>
      <br />
      <div className="buttons">
        <button
          onClick={() => {
            setModalVisible(false);
          }}
          className="close"
        >
          <p>Close</p>
        </button>
        <button
          onClick={() => {
            createPedigree();
            setModalVisible(false);
          }}
          className="create"
        >
          <p>Create</p>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

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
    const newPedigree = chart.create(sex, 100, 100);
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
    chart.connect(pedigree, newPedigree, connect)
  }

  return (
    <div
      style={{
        position: "fixed",
        width: 400,
        height: 500,
        left: "calc(50% - 200px)",
        top: "calc(50% - 280px)",
        backgroundColor: "#FBFBFB",
        boxShadow: "0px 2px 12px 6px #E8E4E4",
        borderRadius: 10,
      }}
    >
      <h2>Create a new pedigree</h2>
      <label>
        <p>Sex</p>
        <select onChange={changeSex}>
          <option value="male">Male</option>
          <option selected value="female">Female</option>
          <option value="unknown">
            Unknown
          </option>
        </select>
      </label>
      <label>
        <p>Type</p>
        <select onChange={changeType}>
          <option selected value="">
            Standard
          </option>
          <option value="proband">Proband</option>
          <option value="deceased">Deceased</option>
          <option value="multiple">Multiple</option>
          <option selected value="pregnant">Pregnant</option>
        </select>
      </label>
      <label>
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
      <button
        onClick={() => {
          setModalVisible(false);
        }}
      >
        <p>close</p>
      </button>
      <button
        onClick={() => {
          createPedigree();
          setModalVisible(false);
        }}
      >
        <p>create</p>
      </button>
    </div>
  );
}

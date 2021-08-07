import React, { useState } from "react";
import AddModal from "./Modal";

export default function Dots({ x, y, chart, pedigree }) {
  const [modalVisible, setModalVisible] = useState(false)

  function generateParents() {
    const father = chart.create("male", pedigree.getRawX()-90, pedigree.getRawY()-150);
    const mother = chart.create("female", pedigree.getRawX()+90, pedigree.getRawY()-150);
    chart.connect(father, mother, "partnership")
    chart.connect(mother, pedigree, "sibling")
  }

  return (
    <div
      style={{
        position: "absolute",
        top: y+20,
        left: x+30,
      }}
      className="pedigree-menu"
    >
      <button className="button green-btn" onClick={()=>{setModalVisible(true)}}>Add</button>
      <button className="button yellow-btn">Modify</button>
      <button className="button red-btn" onClick={()=>{chart.delete(pedigree.id)}}>Remove</button>
      <button className="button green-btn" onClick={()=>{generateParents()}}>Generate parents</button>
      {modalVisible ? <AddModal pedigree={pedigree} setModalVisible={setModalVisible} chart={chart} /> : null}
    </div>
  );
}

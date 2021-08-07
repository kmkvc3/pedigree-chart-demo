import React, { useState } from "react";
import AddModal from "./Modal";

export default function PedigreeMenu({ x, y, chart, pedigree }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div
      style={{
        position: "absolute",
        top: y+30,
        left: x+30,
      }}
    >
      <button onClick={()=>{setModalVisible(true)}}>Add</button>
      <button>Modify</button>
      <button onClick={()=>{chart.delete(pedigree.id)}}>Remove</button>
      {modalVisible ? <AddModal pedigree={pedigree} setModalVisible={setModalVisible} chart={chart} /> : null}
    </div>
  );
}

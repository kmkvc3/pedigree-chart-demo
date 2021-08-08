import "./App.css";
import PedigreeChart from "pedigree-chart";
import { useEffect, useState } from "react";

function Legends() {
  const [chart, setChart] = useState(undefined);

  useEffect(() => {
    const chart = new PedigreeChart();
    chart.setDiagram("chart3");
    chart.setConfig({
      width: 800,
      height: 500,
      dragEnabled: false,
      panEnabled: false,
    });
    setChart(chart);

    const femaleNotAffected = chart.create("female", -1000, 260);
    const maleNotAffected = chart.create("male", -1000, 260);
    const femaleCarrier = chart.create("female", -1000, 160);
    femaleCarrier.addDiseaseShape("dot", "A42562")
    const maleCarrier = chart.create("male", -1000, 160);
    maleCarrier.addDiseaseShape("dot", "A42562")

    const legendTable = chart.createLegend(170, 70)
    legendTable.setItemsPerRow(2)
    legendTable.setPedigree(femaleNotAffected, "Female not affected")
    legendTable.setPedigree(femaleCarrier, "Female carrier")
    legendTable.setPedigree(maleNotAffected, "Male not affected")
    legendTable.setPedigree(maleCarrier, "Male carrier")
  }, []);

  return (
    <div className="App" style={{marginTop: 80}}>
      <h1>...and amazing legends</h1>
      <canvas id="chart3"></canvas>
    </div>
  );
}

export default Legends;

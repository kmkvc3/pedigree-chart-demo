import "./App.css";
import PedigreeChart from "pedigree-chart";
import { useEffect, useState } from "react";

function App() {
  const [chart, setChart] = useState(undefined);

  useEffect(() => {
    const chart = new PedigreeChart();
    chart.setDiagram("chart2");
    chart.setConfig({
      width: 800,
      height: 500,
      dragEnabled: false,
      panEnabled: false,
    });
    setChart(chart);

    const mother = chart.create("female", 270, 50)
    mother.setLabel({name: "Mother", disease: "Carrier"})
    mother.addDiseaseShape("q3", "#ff4747")
    mother.addDiseaseShape("q4", "#ff4747")

    const father = chart.create("male", 470, 50)
    father.setLabel({name: "Father", disease: "Hemophilic"})
    father.addDiseaseShape("q3", "#ff4747")
    father.addDiseaseShape("q4", "#ff4747")
    chart.connect(mother, father, "partnership")

    const son = chart.create("male", 270, 270)
    son.setLabel({name: "Son", disease: "Healthy"})
    const daughter = chart.create("female", 470, 270)
    daughter.setLabel({name: "Daughter", disease: "Hemophilic"})
    daughter.addDiseaseShape("fill", "#ff4747")
    chart.connect(mother, son, "sibling")
    chart.connect(mother, daughter,"sibling")
  }, []);

  return (
    <div className="App" style={{marginTop: 80}}>
      <h1>Create lables</h1>
      <canvas id="chart2"></canvas>
    </div>
  );
}

export default App;

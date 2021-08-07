import "./App.css";
import PedigreeChart from "pedigree-chart";
import { useEffect, useState } from "react";

function App() {
  const [chart, setChart] = useState(undefined)

  useEffect(() => {
    const chart = new PedigreeChart();
    chart.setDiagram("chart");
    chart.setConfig({
      width: 1000,
      height: 500,
      dragEnabled: true,
      panEnabled: true,
    });
    setChart(chart)
  }, []);

  return (
    <div className="App">
      <h1>Pedigree creator demo</h1>
      <canvas id="chart"></canvas>
    </div>
  );
}

export default App;

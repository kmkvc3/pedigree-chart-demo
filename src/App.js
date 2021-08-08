import "./App.css";
import PedigreeChart from "pedigree-chart";
import { useEffect, useState } from "react";
import PedigreeMenu from "./PedigreeMenu";
import Labels from "./Labels";
import Legends from "./Legends";

function App() {
  const [chart, setChart] = useState(undefined);
  const [lastPickedPedigree, setLastPickedPedigree] = useState(undefined);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const chart = new PedigreeChart();
    chart.setDiagram("chart");
    chart.setConfig({
      width: 1100,
      height: 500,
      dragEnabled: true,
      panEnabled: true,
    });
    setChart(chart);
    const unknown = chart.create("unknown", 520, 160);
    unknown.setLabel({ k: "Click on me!" });

    chart.remove("pedigree-drag");
    chart.remove("pedigree-click");
    chart.remove("diagram-click");

    chart.on("pedigree-drag", (pedigree) => {
      setMenuVisible(true);
      setMenuPosition({ x: pedigree.getX(), y: pedigree.getY() });
    });
    chart.on("pedigree-click", (pedigree) => {
      setMenuVisible(true);
      setLastPickedPedigree(pedigree);
      setMenuPosition({ x: pedigree.getX(), y: pedigree.getY() });
    });
    chart.on("diagram-click", () => {
      setMenuVisible(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Pedigree creator demo</h1>
      {menuVisible ? (
        <PedigreeMenu
          x={menuPosition.x}
          y={menuPosition.y}
          chart={chart}
          pedigree={lastPickedPedigree}
          setMenuVisible={setMenuVisible}
        />
      ) : null}
      <canvas id="chart"></canvas>
      <Labels />
      <Legends />
      <h2>Project was build using pedigree-chart library</h2>
      <h3>
        <a href="https://github.com/kmkvc3/pedigree-chart-demo" target="_blank">
          Check out its source code
        </a>
      </h3>
      <h3>
        <a href="https://kmkvc3.github.io/pedigree-chart-docs/" target="_blank">
          Check the pedigree-chart docs
        </a>
      </h3>
    </div>
  );
}

export default App;

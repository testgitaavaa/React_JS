import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const totalMax = Math.max(...props.dataPoints.map((expense) => expense.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

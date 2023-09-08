import React, { Component } from 'react'
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

class BarChart extends Component {
    componentDidMount() {
        // Check if the chart has already been rendered
        if (!this.chartRendered) {
          this.drawChart();
          this.chartRendered = true; // Set a flag to indicate that the chart has been rendered
        }
      }
    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];

        const svg = d3.select("body")
                    .append("svg")
                    .attr('width', window.innerWidth -20)
                    .attr('height', window.innerHeight -400);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}
export default BarChart;
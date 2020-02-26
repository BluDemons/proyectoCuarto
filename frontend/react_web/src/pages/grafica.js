import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from 'axios';

 const API = "http://localhost:5000/thws/estadistica";



charts(FusionCharts);

export default class Grafica extends Component {
  constructor(props) {
    super(props);
    this.state = {
        estadistica: [],
    };
}

componentDidMount = e => {
  axios
    .get(API)
    .then(response => {
      this.setState({ estadistica: response.data.datos });
      console.log(response.data.datos)
    })
    .catch(error => {
      console.log(error);
    });
};
  render() {
    const {estadistica} = this.state;
    const datos = {
      chart: {
        caption: "Porcentaje de Ventas",
        subcaption: "For all users in 2017",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:
          "<b>$percentValue</b> recaudado por <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "candy"
      },
      data: this.state.estadistica
    };
    const chartConfigs = {
      type: 'pie2d',
      dataSource: datos,
    };
    return (
      <ReactFusioncharts
      {...chartConfigs}
      />
    );
  }
}

// ============= CASES =================
// https://api.highcharts.com/highcharts/chart

const totalCasesChart = Highcharts.chart("total-cases-chart-container", {
  chart: {
    type: "area",
    backgroundColor: "black",
  },

  series: [
    {
      data: [...casesData.CurrentlyInfected],
      color: "rgb(242, 201, 76)",
    },
    {
      data: [...casesData.Recoveries],
      color: "rgb(111, 207, 151)",
    },
    {
      data: [...casesData.Deaths],
      color: "rgb(235, 87, 87)",
    },
  ],

  plotOptions: {
    area: {
      stacking: "normal",
      lineWidth: 1,
      marker: {
        enabled: false,
        symbol: "circle",
      },
    },
  },

  title: { text: "" },
  xAxis: {
    type: "datetime",
    lineWidth: 0,
    tickLength: 0,
    labels: { style: { color: "white" } },
    dateTimeLabelFormats: {
      day: "%d/%m",
      week: "%d/%m",
      month: "%m/ ’%y",
      year: "%Y",
    },
    crosshair: {
      color: "rgb(255, 255, 255)",
      dashStyle: "dash",
      width: 1.5,
      zIndex: 10,
    },
  },
  yAxis: {
    title: { text: "" },
    endOnTick: false,
    labels: { style: { color: "white" } },
    gridLineColor: "rgb(70, 70, 70)",
  },
  legend: { enabled: false },
  credits: { enabled: false },

  tooltip: {
    shared: true,
    backgroundColor: "rgb(87, 199, 133)",
    borderRadius: 10,
    borderWidth: 0,
    shadow: false,
    style: { color: "white" },
    useHTML: true,
    formatter: function () {
      let text = '<div class="tooltip">';
      text += '<div class="tooltip-name">Tính đến<br>';
      text += `<div class="tooltip-name">${timestamp2DateStr(
        this.points[0].x
      )}</div></div>`;
      text +=
        '<div class="tooltip-info-column">Đang mắc:&nbsp;<br>Đã khỏi:&nbsp;<br>Tử vong:&nbsp;</div>';
      text += `<div class="tooltip-info-column">${addSeparator(
        this.points[0].y,
        " "
      )}<br>`;
      text += `${addSeparator(this.points[1].y, " ")}<br>${addSeparator(
        this.points[2].y,
        " "
      )}</div>`;
      text += "</div>";
      return text;
    },
  },
});

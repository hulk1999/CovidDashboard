// ============= CASES =================
// https://api.highcharts.com/highcharts/chart

let chInfos = [
  {
    container: "cases-chart-main-container",
    data: casesData,
    fontSize: 11,
    crosshairWidth: 1.5,
    maxPointWidth: 20,
    tickAmount: undefined,
  },
  {
    container: "cases-chart-world-container",
    data: casesDataWorld,
    fontSize: 7,
    crosshairWidth: 1,
    maxPointWidth: 10,
    tickAmount: 2,
  },
  {
    container: "cases-chart-foreign-container",
    data: casesDataUsa,
    fontSize: 7,
    crosshairWidth: 1,
    maxPointWidth: 10,
    tickAmount: 2,
  },
];

const casesCharts = [null, null, null];
for (let i = 0; i < 3; i++) {
  casesCharts[i] = Highcharts.chart(chInfos[i].container, {
    chart: {
      backgroundColor: "black",
    },

    series: [
      {
        data: [...chInfos[i].data.DailyCases],
        type: "column",
        color: "rgba(144, 223, 255, 0.75)",
        states: { hover: { color: "#1FBFFF" } },
      },
      {
        data: [...chInfos[i].data.DailyCases7DaysAvg],
        type: "line",
        color: "rgb(10, 132, 256)",
      },
    ],

    plotOptions: {
      column: {
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0,
        maxPointWidth: chInfos[i].maxPointWidth,
      },
      line: {
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
      labels: {
        style: {
          color: "white",
          fontSize: chInfos[i].fontSize,
        },
      },
      dateTimeLabelFormats: {
        day: "%d/%m",
        week: "%d/%m",
        month: "%m/ ’%y",
        year: "%Y",
      },
      crosshair: {
        color: "rgb(10, 132, 256)",
        dashStyle: "dash",
        width: chInfos[i].crosshairWidth,
        zIndex: 10,
      },
    },
    yAxis: {
      title: { text: "" },
      endOnTick: false,
      labels: {
        style: {
          color: "white",
          fontSize: chInfos[i].fontSize,
        },
      },
      gridLineColor: "rgb(70, 70, 70)",
      tickAmount: chInfos[i].tickAmount,
    },
    legend: { enabled: false },
    credits: { enabled: false },

    tooltip: {
      shared: true,
      backgroundColor: "rgb(10, 132, 256)",
      borderRadius: 10,
      borderWidth: 0,
      shadow: false,
      style: { color: "white" },
      useHTML: true,
      formatter: function () {
        let text = '<div class="tooltip">';
        text += `<div class="tooltip-name">${timestamp2DateStr(
          this.points[0].x
        )}</div>`;
        text +=
          '<div class="tooltip-info-column">Ca mới:&nbsp;<br>TB 7 ngày:&nbsp;</div>';
        text += `<div class="tooltip-info-column">${addSeparator(
          this.points[0].y,
          " "
        )}<br>`;
        text += `${addSeparator(this.points[1].y, " ")}</div>`;
        text += "</div>";
        return text;
      },
    },
  });
}

// ------------------------------------------------------------------------------------------------

function updateCountry(country) {
  if (country == "usa") chInfos[2].data = casesDataUsa;
  if (country == "china") chInfos[2].data = casesDataChina;
  if (country == "india") chInfos[2].data = casesDataIndia;
  handleSliderInput(document.getElementById("slider-left"), true, false);
}

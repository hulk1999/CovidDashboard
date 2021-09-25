// ============= VACCINE =================
// https://api.highcharts.com/highcharts/chart

let isPeople = true;

const vaccineChart = Highcharts.chart("vaccine-chart-container", {
  chart: {
    backgroundColor: "black",
  },

  series: [
    {
      data: [...vaccineData.partialPeople],
      color: "rgb(94, 92, 230)",
    },
    {
      data: [...vaccineData.fullPeople],
      color: "rgb(191, 90, 242)",
    },
  ],

  plotOptions: {
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
    labels: { style: { color: "white" } },
    dateTimeLabelFormats: {
      day: "%d/%m",
      week: "%d/%m",
      month: "%m/ ’%y",
      year: "%Y",
    },
    crosshair: {
      color: "rgb(94, 92, 230)",
      dashStyle: "dash",
      width: 1.5,
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
    backgroundColor: "rgb(94, 92, 230)",
    borderRadius: 10,
    borderWidth: 0,
    shadow: false,
    style: { color: "white" },
    useHTML: true,
    formatter: function () {
      let text = '<div class="tooltip">';
      text += '<div class="tooltip-name">Tính đến<br>';
      text += `${timestamp2DateStr(this.points[0].x)}</div>`;
      text +=
        '<div class="tooltip-info-column">Mũi 1:&nbsp;<br>Mũi 2:&nbsp;</div>';
      text += '<div class="tooltip-info-column">';
      if (isPeople)
        text += `${addSeparator(this.points[0].y, " ")}<br>${addSeparator(
          this.points[1].y,
          " "
        )}</div>`;
      else
        text += `${this.points[0].y.toFixed(2)}%<br>${this.points[1].y.toFixed(
          2
        )}%</div>`;
      text += "</div>";
      return text;
    },
  },
});

// ------------------------------------------------------------------------------------------------

function updateVaccine(unit) {
  if (unit == "people") {
    isPeople = true;
    vaccineChart.yAxis[0].update({ labels: { format: undefined } });
  } else if (unit == "percent") {
    isPeople = false;
    vaccineChart.yAxis[0].update({ labels: { format: "{value}%" } });
  }
  handleSliderInput(document.getElementById("slider-left"), true, false);
}

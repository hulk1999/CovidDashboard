// ============= MAP =================
// https://api.highcharts.com/highmaps
Highcharts.mapChart("map-chart-container", {
  chart: {
    map: "countries/vn/vn-all",
    backgroundColor: "black",
  },
  mapNavigation: {
    /* enabled: true, */
  },
  series: [
    {
      data: mapData.data,
      joinBy: ["iso_3166_2", "iso3166_2"],
      states: {
        hover: {
          // borderColor: 'red',
          // brightness: -.5,
          // color: 'rgba(219, 26, 26, 0.3)'
        },
      },
      borderColor: "black",
    },
  ],

  title: { text: "" },
  colorAxis: {
    endOnTick: false,
    reversed: false,
    min: 0,
    max: 1,
    stops: [
      [0, "rgb(255, 235, 235)"],
      [1 / 4, "rgb(244, 164, 164)"],
      [2 / 4, "rgb(235, 87, 87)"],
      [3 / 4, "rgb(219, 26, 26)"],
      [1, "rgb(146, 17, 17)"],
    ],
    labels: {
      style: { color: "white" },
      formatter: function () {
        return this.value + (this.isLast ? "+" : "");
      },
    },
  },
  legend: {
    // symbolWidth: 300,
    layout: "vertical",
    align: "left",
    verticalAlign: "bottom",
    floating: true,
  },
  credits: { enabled: false },

  tooltip: {
    backgroundColor: "rgb(235, 87, 87)",
    borderRadius: 10,
    borderWidth: 0,
    shadow: false,
    style: { color: "white" },
    useHTML: true,
    formatter: function () {
      let text = '<div class="tooltip">';
      text += `<div class="tooltip-name">${this.point.vName}</div>`;
      text +=
        '<div class="tooltip-info-column">Ca nhiễm:&nbsp;<br>Tử vong:&nbsp;</div>';
      text += `<div class="tooltip-info-column">${addSeparator(
        this.point.cases,
        " "
      )}<br>`;
      text += `${addSeparator(this.point.deaths, " ")}</div>`;
      text += "</div>";
      return text;
    },
  },
});

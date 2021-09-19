const len = casesData.CurrentlyInfected.length;
const data = [casesData.CurrentlyInfected[len-1][1],
              casesData.Recoveries[len-1][1],
              casesData.Deaths[len-1][1]];

const max = data.reduce(function(a, b) { return a + b; }, 0);

const max_format_1 = max.toString().slice(-3);
const max_format_2 = max.toString().slice(-6, -3);
const max_format_3 = max.toString().slice(-9, -6);
const max_format = max_format_3 + " " + max_format_2 + " " + max_format_1;

const data_0_format_1 = data[0].toString().slice(-3);
const data_0_format_2 = data[0].toString().slice(-6, -3);
const data_0_format_3 = data[0].toString().slice(-9, -6);
const data_0_format = data_0_format_3 + " " + data_0_format_2 + " " + data_0_format_1;

const data_1_format_1 = data[1].toString().slice(-3);
const data_1_format_2 = data[1].toString().slice(-6, -3);
const data_1_format_3 = data[1].toString().slice(-9, -6);
const data_1_format = data_1_format_3 + " " + data_1_format_2 + " " + data_1_format_1;

const data_2_format_1 = data[2].toString().slice(-3);
const data_2_format_2 = data[2].toString().slice(-6, -3);
const data_2_format_3 = data[2].toString().slice(-9, -6);
const data_2_format = data_2_format_3 + " " + data_2_format_2 + " " + data_2_format_1;

document.getElementById("hbar-current-cases-value").innerHTML = data_0_format + " ca";
document.getElementById("hbar-live-cases-value").innerHTML = data_1_format + " ca";
document.getElementById("hbar-dead-cases-value").innerHTML = data_2_format + " ca";
document.getElementById("total-data").innerHTML = max_format;

const INACTIVE_COL = "#202124";
const ACTIVE_CURRENT_COL = "rgb(242, 201, 76)";
const ACTIVE_LIVE_COL = "rgb(111, 207, 151)";
const ACTIVE_DEAD_COL = "rgb(235, 87, 87)";

const current_bar = document.getElementById("hbar-current-cases");
const live_bar = document.getElementById("hbar-live-cases");
const dead_bar = document.getElementById("hbar-dead-cases");

current_bar.style.background = `linear-gradient(to right, ` +
  `${ACTIVE_CURRENT_COL} 0%, ${ACTIVE_CURRENT_COL} ${data[0]/max*100}%, ` +
  `${INACTIVE_COL} ${data[0]/max*100}%, ${INACTIVE_COL} 100%)`;

live_bar.style.background = `linear-gradient(to right, ` +
  `${ACTIVE_LIVE_COL} 0%, ${ACTIVE_LIVE_COL} ${data[1]/max*100}%, ` +
  `${INACTIVE_COL} ${data[1]/max*100}%, ${INACTIVE_COL} 100%)`;

dead_bar.style.background = `linear-gradient(to right, ` +
  `${ACTIVE_DEAD_COL} 0%, ${ACTIVE_DEAD_COL} ${data[2]/max*100}%, ` +
  `${INACTIVE_COL} ${data[2]/max*100}%, ${INACTIVE_COL} 100%)`;

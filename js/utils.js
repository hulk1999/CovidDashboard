function timestamp2DateStr(timestamp) {
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return (
    (day < 10 ? "0" + day : day) +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    year
  );
}

function addSeparator(num, sep) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

window.onload = function(e){ 


  // ================== SLIDER ====================


  const len = casesData.DailyCases.length;
  const PERIODS = {"phase-1": [0, 183], "phase-2": [183, 371], "phase-3": [371, 461], "phase-4": [461, len], "phase-all": [0, len]};
  let id = "phase-4";

  let sliderLeft = document.getElementById('slider-left');
  let sliderRight = document.getElementById('slider-right');
  let startTxt = document.getElementById('slider-start')
  let endTxt = document.getElementById('slider-end');

  sliderLeft.min = PERIODS[id][0];
  sliderLeft.max = PERIODS[id][1]-1;
  sliderLeft.value = PERIODS[id][0];
  sliderRight.min = PERIODS[id][0];
  sliderRight.max = PERIODS[id][1]-1;
  sliderRight.value = PERIODS[id][1]-1;
  startTxt.innerHTML = timestamp2DateStr(casesData.DailyCases[PERIODS[id][0]][0]);
  endTxt.innerHTML = timestamp2DateStr(casesData.DailyCases[PERIODS[id][1]-1][0]);
  handleSliderInput(document.getElementById('slider-left'), true, true);


  // =============== PERIOD DROPDOWN ===============

  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsList.forEach(option => {
    option.addEventListener("click", (event) => {

      // dropdown event handling
      event.stopImmediatePropagation();
      selected.innerHTML = option.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");

      // change data
      let id = option.childNodes[1].id;
      sliderLeft.min = PERIODS[id][0];
      sliderLeft.max = PERIODS[id][1]-1;
      sliderLeft.value = PERIODS[id][0];
      sliderRight.min = PERIODS[id][0];
      sliderRight.max = PERIODS[id][1]-1;
      sliderRight.value = PERIODS[id][1]-1;
      startTxt.innerHTML = timestamp2DateStr(casesData.DailyCases[PERIODS[id][0]][0]);
      endTxt.innerHTML = timestamp2DateStr(casesData.DailyCases[PERIODS[id][1]-1][0]);
      handleSliderInput(document.getElementById('slider-left'), true, true);

    });
  });



}
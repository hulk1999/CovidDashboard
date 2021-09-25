function findPos(val, min, max) {
  return ((val - min) / (max - min)) * 100
}

function handleSliderInput(el, isLeft, isUpdate) {
  // somewhat like a constructor
  const self = handleSliderInput
  if (typeof self.left == 'undefined' || isUpdate) {
    self.INACTIVE_COLOR = 'rgb(33, 33, 33)'
    self.ACTIVE_COLOR = 'rgb(10, 132, 255)'

    self.min = parseInt(el.min)
    self.max = parseInt(el.max)
    self.left = self.min
    self.right = self.max

    self.slider = document.getElementById('slider-right')
    self.startTxt = document.getElementById('slider-start')
    self.endTxt = document.getElementById('slider-end')
  }

  // calculate relative position of marker, in percent
  if (isLeft) {
    if (el.value >= self.right) el.value = self.right - 7 // invalid
    const value = parseInt(el.value)
    self.left = value
    self.startTxt.innerHTML = timestamp2DateStr(casesData.DailyCases[value][0])
  } else {
    if (el.value <= self.left) el.value = self.left + 7 // invalid
    const value = parseInt(el.value)
    self.right = value
    self.endTxt.innerHTML = timestamp2DateStr(casesData.DailyCases[value][0])
  }

  // update background color
  let leftPos = findPos(self.left, self.min, self.max)
  let rightPos = findPos(self.right, self.min, self.max)
  self.slider.style.background =
    `linear-gradient(to right, ` +
    `${self.INACTIVE_COLOR} 0%, ${self.INACTIVE_COLOR} ${leftPos}%, ` +
    `${self.ACTIVE_COLOR} ${leftPos}%, ${self.ACTIVE_COLOR} ${rightPos}%, ` +
    `${self.INACTIVE_COLOR} ${rightPos}%, ${self.INACTIVE_COLOR} 100%)`

  // update charts
  for (let i = 0; i < 3; i++) {
    casesCharts[i].series[0].setData(
      chInfos[i].data.DailyCases.slice(self.left, self.right + 1),
      (redraw = false)
    )
    casesCharts[i].series[1].setData(
      chInfos[i].data.DailyCases7DaysAvg.slice(self.left, self.right + 1),
      (redraw = false)
    )
    casesCharts[i].redraw()
  }
  totalCasesChart.series[0].setData(
    casesData.CurrentlyInfected.slice(self.left, self.right + 1),
    (redraw = false)
  )
  totalCasesChart.series[1].setData(
    casesData.Recoveries.slice(self.left, self.right + 1),
    (redraw = false)
  )
  totalCasesChart.series[2].setData(
    casesData.Deaths.slice(self.left, self.right + 1),
    (redraw = false)
  )
  totalCasesChart.redraw()
  if (isPeople) {
    vaccineChart.series[0].setData(
      vaccineData.partialPeople.slice(self.left, self.right + 1),
      (redraw = false)
    )
    vaccineChart.series[1].setData(
      vaccineData.fullPeople.slice(self.left, self.right + 1),
      (redraw = false)
    )
  } else {
    vaccineChart.series[0].setData(
      vaccineData.partialPct.slice(self.left, self.right + 1),
      (redraw = false)
    )
    vaccineChart.series[1].setData(
      vaccineData.fullPct.slice(self.left, self.right + 1),
      (redraw = false)
    )
  }
  vaccineChart.redraw()
}

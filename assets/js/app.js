function populateData(flag) {
  if (flag === 'yes') {
    document.getElementById(flag + "-quote").textContent = yes[0];
    resetDays();
    populateDays(flag);
  }
  else { 
    document.getElementById(flag + "-quote").textContent = no[0];
    increaseDays(1);
    populateDays(flag);
  }
}

function populateDays(flag) {
  document.getElementById("days").textContent = getDays();
  if (flag !== '') {
    document.getElementById(flag + "-days").textContent = getDays();
  }
}

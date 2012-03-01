function populateData(flag) {
  if (flag === 'yes') {
    document.getElementById(flag + "-quote").textContent = yes[0];
    resetDays();
    populateDays(flag);
  }
  else {
    if (flag === 'no') {
	  document.getElementById(flag + "-quote").textContent = no[0];
      increaseDays(1);
      populateDays(flag);
	  } else {
	  populateDays(flag);
	  }
  }
}

function populateDays(flag) {
  if (getDays() == 0) {
	document.getElementById("days").textContent = "FAIL";
	} else {
	  document.getElementById("days").textContent = getDays();
	  } 
  if (flag !== '') {
    if (getDays() == 0) {
	  document.getElementById(flag + "-days").textContent = "FAIL";
	  } else {
	    document.getElementById(flag + "-days").textContent = getDays();
		}
  }
}

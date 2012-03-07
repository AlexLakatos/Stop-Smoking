function populateData(flag) {
  if (flag === 'yes') {
    document.getElementById(flag + "-quote").textContent = JSON.parse(storage.getItem("yes"))[getCurrentIndex('yes')];
    resetDays();
    populateDays(flag);
  }
  else {
    if (flag === 'no') {
	  document.getElementById(flag + "-quote").textContent = JSON.parse(storage.getItem("no"))[getCurrentIndex('no')];
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

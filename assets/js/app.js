function populateData(flag) {
  if ((localStorage.year == new Date().getFullYear())&&(localStorage.month == new Date().getMonth())&&(localStorage.day == new Date().getDate())&&(storage.getItem("firstRun") == "false")) {
	  if (flag === 'yes') {
    document.getElementById(flag + "-quote").textContent = JSON.parse(storage.getItem("yes"))[getCurrentIndex('yes')];
    populateDays(flag);
  }
  else {
    if (flag === 'no') {
	  document.getElementById(flag + "-quote").textContent = JSON.parse(storage.getItem("no"))[getCurrentIndex('no')];
      populateDays(flag);
	  } else {
	  populateDays(flag);
	  }
  }
  } else {
  storage.setItem('firstRun', "false");
  if (flag === 'yes') {
	increaseCurrentIndex('yes');
    document.getElementById(flag + "-quote").textContent = JSON.parse(storage.getItem("yes"))[getCurrentIndex('yes')];
    resetDays();
	storage.setItem('lastDate', new Date());
    populateDays(flag);
  }
  else {
    if (flag === 'no') {
	  increaseCurrentIndex('no');
	  document.getElementById(flag + "-quote").textContent = JSON.parse(storage.getItem("no"))[getCurrentIndex('no')];
      increaseDays(Math.round((new Date() - new Date(storage.getItem('lastDate')))/(1000 * 60 * 60 * 24)) + 1);
	  storage.setItem('lastDate', new Date());
      populateDays(flag);
	  } else {
	  populateDays(flag);
	  }
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

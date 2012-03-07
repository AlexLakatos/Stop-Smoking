var storage = window.localStorage;
var firstDate = new Date();

function init() {
  if (storage.length === 0) {
    storage.setItem('days', 0);
    storage.setItem('day', firstDate.getDate());
    storage.setItem('month', firstDate.getMonth());
    storage.setItem('year', firstDate.getFullYear());
    storage.setItem('firstRun', true);
  }
}

function increaseDays(i) {
  storage.setItem('days', parseInt(storage.getItem('days')) + i);
}

function getDays() {
  return storage.getItem('days');
}

function resetDays() {
  storage.setItem('days', 0);
}

function addDays(i) {
  storage.setItem('days', parseInt(storage.getItem('days')) + parseInt(i));
  populateDays('options');
}

function goBack() {
  history.back();
  populateDays("");
  populateDays("no");
  populateDays("yes");
  populateDays("options");
}

function validateOptions(i) {
  if (!isNaN(parseInt(i))) addDays(i);
}

init();

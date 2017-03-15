'use strict';

var hours = ['','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm','Total'];

var body = document.getElementsByTagName('body')[0];

var allStores = [];

var firstAndPike = new CreateStore('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new CreateStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CreateStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CreateStore('Capitol Hill', 20, 38, 2.3);
var alki = new CreateStore('Alki', 2, 16, 4.6);

function CreateStore(name,minCust,maxCust,avgCookies) {

  this.name = name;

  this.minCust = minCust,

  this.maxCust = maxCust;

  this.avgCookiesPurch = avgCookies;

  this.salesArray = [];

  this.total = 0;

  this.randomCustomerPerHr = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.cookiesPurchPerHr = function() {
    for (var i = 0; i < hours.length - 2; i++) {
      var giveMeCookies = Math.floor(this.randomCustomerPerHr() * this.avgCookiesPurch);
      this.salesArray.push(giveMeCookies);
      this.total += giveMeCookies;
    }
  };

  this.generateTableRow = function() {

    this.cookiesPurchPerHr();

    var table = document.getElementById('bodyTable');

    var tr = document.createElement('tr');

    var tbody = document.getElementById('tableBody');
    tbody.appendChild(tr);

    var storeNameTd = document.createElement('th');
    storeNameTd.innerText = this.name;

    tr.appendChild(storeNameTd);

    for (var i = 0; i < hours.length - 2; i++) {
      var newTd = document.createElement('td');
      newTd.innerText = this.salesArray[i];
      tr.appendChild(newTd);
    }
    newTd = document.createElement('td');
    newTd.innerText = this.total;
    tr.appendChild(newTd);
  };
  allStores.push(this);
};

function createTable() {
  var table = document.createElement('table');
  body.appendChild(table);
  table.id = 'bodyTable';

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  for (var i = 0; i < hours.length - 1; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  }
  var th = document.createElement('th');
  th.innerText = hours[i];
  tr.appendChild(th);
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.id = 'tableBody';
};

createTable();

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}

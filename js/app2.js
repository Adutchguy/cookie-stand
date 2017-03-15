'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];

var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var tdNode = document.createElement('td').setAttribute('id','td');
var thNode = document.createElement('th').setAttribute('id','th');
var trNode = document.createElement('tr').setAttribute('id','tr');
var tableNode = document.createElement('table').setAttribute('id','table');

var getTdNode = document.getElementById('td');
var getThNode = document.getElementById('th');
var getTrNode = document.getElementById('tr');
var getTableNode = document.getElementById('table');

var creatStores = function(name,minCust,maxCust,avgCookies,location) {

  this.name = name,

  this.minCust = minCust,

  this.maxCust = maxCust,

  this.avgCookies = avgCookies,

  this.randomCustomerPerHr = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  this.randomCookiesPurchHr = function() {
    return Math.ceil(this.randomCustomerPerHr() * this.avgCookies);
  },

  this.cookiesByHour = function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  this.daysTotalCookies = function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesByHour()[i];
    }
    return total;
  },

  this.daysHoursListed = function() {
    var hoursList = [];
    for (var i = 0 ; i < hours.length ; i++) {
      hoursList.push(hours[i]);
    }
    return hoursList;
  },

  this.getStoreNames = function() {
    var storeNameArray = [];
    for (var i = 0; i < storeName.length; i++) {
      storeNameArray.push(storeName[i]);
    }
    return storeNameArray;
  },

  this.renderTH = function() {
    for (var i = 0; i < storeName.length; i++) {
      var newText = document.createTextNode(this.getStoreNames()[i]);
      tdNode.appendChild(newText);
    }
    getTableNode.appendChild(tdNode);
  },

  this.renderTD = function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var newTD = document.createElement('td');
      var att = document.createAttribute("scope")
      att.value = "row";
      newTD.setAttributeNode(att);
      var newText = document.createTextNode(this.cookiesByHour()[i] + ' cookies');
      newTD.appendChild(newText);
      var placeHere = document.getElementById(location);
      placeHere.appendChild(newTD);
    }
  }
}
    // var ul1 = document.createElement('li');
    // var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    // ul1.appendChild(newText);
    // var position = document.getElementById(location);
    // position.appendChild(ul1);


var firstAndPike = new creatStores('firstAndPike',23,65,6.3,'one');
firstAndPike.renderTD();

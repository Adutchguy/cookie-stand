'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];

var firstAndPike;

var creatStore = function(name,minCust,maxCust,avgCookies,location) {
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

  this.cookiesSoldEachHr = function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  this.daysTotalCookies = function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesSoldEachHr()[i];
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

  this.pushAllToArray = function() {
    var showSummary = [];
    for (var i = 0 ; i < hours.length ; i++) {
      showSummary.push(this.daysHoursListed()[i] + ': ' + this.cookiesSoldEachHr()[i] + ' cookies');
    }
    return showSummary;
  },

  this.createListItems = function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var ul1 = document.createElement('li');
      var newText = document.createTextNode(this.pushAllToArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById(location);
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById(location);
    position.appendChild(ul1);
  };
};
var firstAndPike = new creatStore('firstAndPike',23,65,6.3,'one');
firstAndPike.createListItems();
var seatacAirport = new creatStore('seatacAirport',3,24,1.2,'two');
seatacAirport.createListItems();
var firstAndPike = new creatStore('seattleCenter',11,38,2.3,'three')
firstAndPike.createListItems();
var capitolHill = new creatStore('capitolHill',20,38,2.3,'four')
capitolHill.createListItems();
var alki = new creatStore('alki',2,16,4.6,'five')
alki.createListItems();

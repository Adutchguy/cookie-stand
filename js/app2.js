'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];

var storeName = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

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
    var newthead = document.createElement('thead');
    var newth = document.createElement('th');
    var placeNewth = document.getElementsByTagName('thead');
    var placeNewthead = document.getElementsByTagName('table');
    placeNewthead.appendChild(placeNewth[0]);
    for (var i = 0; i < storeName.length; i++) {
      var newText = document.createTextNode(getStoreNames()[i]);
      newth.appendChild(newText);
      newthead.appendChild(newth);
    }
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

};
//     var ul1 = document.createElement('li');
//     var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
//     ul1.appendChild(newText);
//     var position = document.getElementById(location);
//     position.appendChild(ul1);
//   };
// };
//
var firstAndPike = new creatStores('firstAndPike',23,65,6.3,'one');
firstAndPike.renderTH();


// 'use strict'
//
// var newTD = document.createElement('td');
// console.log(newTd)
//
//
// var newText = document.createTextNode('some text');
// newTd.appendChild(newText);
//
// var position = document.getElementsById('bdy');
// console.log(position);
// position.appendChild(newTd);

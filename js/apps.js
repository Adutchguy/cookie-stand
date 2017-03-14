'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var firstAndPike = {

  minCust: 23,

  maxCust: 65,

  avgCookies: 6.3,

  randomCustomerPerHr: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  },

  randomCookiesPurchHr: function() {
    return Math.ceil(this.randomCustomerPerHr() * this.avgCookies);
  },

  cookiesSoldEachHr: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  daysTotalCookies: function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesSoldEachHr()[i];
    }
    return total;
  },

  daysHoursListed: function() {
    var hoursList = [];
    for (var i = 0 ; i < hours.length ; i++) {
      hoursList.push(hours[i]);
    }
    return hoursList;
  },

  pushAllToArray: function() {
    var showSummary = [];
    for (var i = 0 ; i < hours.length ; i++) {
      showSummary.push(this.daysHoursListed()[i] + ': ' + this.cookiesSoldEachHr()[i] + ' cookies');
    }
    return showSummary;
  },

  createLineItems: function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var ul1 = document.createElement('li');
      var newText = document.createTextNode(this.pushAllToArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById('1');
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('1');
    position.appendChild(ul1);
  }
};
firstAndPike.createLineItems();

var seatacAirport = {

  minCust: 3,

  maxCust: 24,

  avgCookies: 1.2,

  randomCustomerPerHr: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  },

  randomCookiesPurchHr: function() {
    return Math.ceil(this.randomCustomerPerHr() * this.avgCookies);
  },

  cookiesSoldEachHr: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  daysTotalCookies: function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesSoldEachHr()[i];
    }
    return total;
  },

  daysHoursListed: function() {
    var hoursList = [];
    for (var i = 0 ; i < hours.length ; i++) {
      hoursList.push(hours[i]);
    }
    return hoursList;
  },

  pushAllToArray: function() {
    var showSummary = [];
    for (var i = 0 ; i < hours.length ; i++) {
      showSummary.push(this.daysHoursListed()[i] + ': ' + this.cookiesSoldEachHr()[i] + ' cookies');
    }
    return showSummary;
  },

  createLineItems: function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var ul1 = document.createElement('li');
      var newText = document.createTextNode(this.pushAllToArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById('2');
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('2');
    position.appendChild(ul1);
  }
};
seatacAirport.createLineItems();

var seattleCenter = {

  minCust: 11,

  maxCust: 38,

  avgCookies: 3.7,

  randomCustomerPerHr: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  },

  randomCookiesPurchHr: function() {
    return Math.ceil(this.randomCustomerPerHr() * this.avgCookies);
  },

  cookiesSoldEachHr: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  daysTotalCookies: function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesSoldEachHr()[i];
    }
    return total;
  },

  daysHoursListed: function() {
    var hoursList = [];
    for (var i = 0 ; i < hours.length ; i++) {
      hoursList.push(hours[i]);
    }
    return hoursList;
  },

  pushAllToArray: function() {
    var showSummary = [];
    for (var i = 0 ; i < hours.length ; i++) {
      showSummary.push(this.daysHoursListed()[i] + ': ' + this.cookiesSoldEachHr()[i] + ' cookies');
    }
    return showSummary;
  },

  createLineItems: function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var ul1 = document.createElement('li');
      var newText = document.createTextNode(this.pushAllToArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById('3');
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('3');
    position.appendChild(ul1);
  }
};
seattleCenter.createLineItems();

var capitolHill = {

  minCust: 20,

  maxCust: 38,

  avgCookies: 2.3,

  randomCustomerPerHr: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  },

  randomCookiesPurchHr: function() {
    return Math.ceil(this.randomCustomerPerHr() * this.avgCookies);
  },

  cookiesSoldEachHr: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  daysTotalCookies: function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesSoldEachHr()[i];
    }
    return total;
  },

  daysHoursListed: function() {
    var hoursList = [];
    for (var i = 0 ; i < hours.length ; i++) {
      hoursList.push(hours[i]);
    }
    return hoursList;
  },

  pushAllToArray: function() {
    var showSummary = [];
    for (var i = 0 ; i < hours.length ; i++) {
      showSummary.push(this.daysHoursListed()[i] + ': ' + this.cookiesSoldEachHr()[i] + ' cookies');
    }
    return showSummary;
  },

  createLineItems: function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var ul1 = document.createElement('li');
      var newText = document.createTextNode(this.pushAllToArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById('4');
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('4');
    position.appendChild(ul1);
  }
};
capitolHill.createLineItems();

var alki = {

  minCust: 2,

  maxCust: 16,

  avgCookies: 4.6,

  randomCustomerPerHr: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  },

  randomCookiesPurchHr: function() {
    return Math.ceil(this.randomCustomerPerHr() * this.avgCookies);
  },

  cookiesSoldEachHr: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < hours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },

  daysTotalCookies: function() {
    var total = 0;
    for (var i = 0 ; i < hours.length ; i++) {
      total += this.cookiesSoldEachHr()[i];
    }
    return total;
  },

  daysHoursListed: function() {
    var hoursList = [];
    for (var i = 0 ; i < hours.length ; i++) {
      hoursList.push(hours[i]);
    }
    return hoursList;
  },

  pushAllToArray: function() {
    var showSummary = [];
    for (var i = 0 ; i < hours.length ; i++) {
      showSummary.push(this.daysHoursListed()[i] + ': ' + this.cookiesSoldEachHr()[i] + ' cookies');
    }
    return showSummary;
  },

  createLineItems: function() {
    for (var i = 0 ; i < hours.length ; i++) {
      var ul1 = document.createElement('li');
      var newText = document.createTextNode(this.pushAllToArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById('5');
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.daysTotalCookies() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('5');
    position.appendChild(ul1);
  }
};
alki.createLineItems();

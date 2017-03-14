'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var firstAndPike = {

  minCust: 23,

  maxCust: 65,

  avgCookies: 6.3,

  showSummary: [],

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
    // console.log(cookiesPerHour);
  },

  daysTotalCookies: function() {
    console.log(this.cookiesSoldEachHr());
  }

};
//
//   // pushAmounts: function() {
//   //   for (var i = 0 ; i < 15 ; i++) {
//   //     this.randomCookiesPurchHr();
//   //     this.showSummary.push(hours[i] + cookiesPerHour[i] + ' cookies.')
//   //   }
//   // }
// };
// //
// // firstAndPike.randomCookiesPurchHr;
// // comnsole.log(firstAndPike.cookiesPerHour);
//
// var seatacAirport = {
//
//   minCust: 3,
//
//   maxCust: 24,
//
//   avgCookies: 1.2,
//
//   cookiesPerHour: [],
//
//   randomCustomerPerHr: function() {
//     return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//
//   randomCookiesPurchHr: function() {
//     for (var i = 0 ; i < hours.length ; i++) {
//       this.cookiesPerHour.push(Math.ceil(this.randomCustomerPerHr() * this.avgCookies));
//     }
//   }
// };
//
// var seattleCenter = {
//
//   minCust: 11,
//
//   maxCust: 38,
//
//   avgCookies: 3.7,
//
//   cookiesPerHour: [],
//
//   randomCustomerPerHr: function() {
//     return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//
//   randomCookiesPurchHr: function() {
//     for (var i = 0 ; i < hours.length ; i++) {
//       this.cookiesPerHour.push(Math.ceil(this.randomCustomerPerHr() * this.avgCookies));
//     }
//   }
// };
//
// var capitolHill = {
//
//   minCust: 20,
//
//   maxCust: 38,
//
//   avgCookies: 2.3,
//
//   cookiesPerHour: [],
//
//   randomCustomerPerHr: function() {
//     return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//
//   randomCookiesPurchHr: function() {
//     for (var i = 0 ; i < hours.length ; i++) {
//       this.cookiesPerHour.push(Math.ceil(this.randomCustomerPerHr() * this.avgCookies));
//     }
//   }
// };
//
// var alki = {
//
//   minCust: 2,
//
//   maxCust: 16,
//
//   avgCookies: 4.6,
//
//   cookiesPerHour: [],
//
//   randomCustomerPerHr: function() {
//     return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   },
//
//   randomCookiesPurchHr: function() {
//     for (var i = 0 ; i < hours.length ; i++) {
//       this.cookiesPerHour.push(Math.ceil(this.randomCustomerPerHr() * this.avgCookies));
//     }
//   }
// };

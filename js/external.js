"use strict";

// console.log('Hello from external JavaScript');
// let userResponse = prompt("What's your favorite color?");
// alert("Great, " + userResponse + " is my favorite color too!");
// prompt("How many days did you rent ")

// Movie Rental
let mermaidRentDays = prompt("How many days did you rent 'The Little Mermaid'?");
let bearRentDays = prompt("How many days did you rent 'Brother Bear'?");
let herculesRentDays = prompt("How many days did you rent 'Hercules'?");
let pricePerDayDollars = 3;
let mermaidTotalDollars = mermaidRentDays * pricePerDayDollars;
let bearTotalDollars = bearRentDays * pricePerDayDollars;
let herculesTotalDollars = herculesRentDays * pricePerDayDollars;
let totalDollars = mermaidTotalDollars + bearTotalDollars + herculesTotalDollars;
alert("Your total rental fee is " + totalDollars + " dollars.");

// Contractor
let googleDollarsPerHr = prompt("What is Google's rate per hour?");
let amazonDollarsPerHr = prompt("What is Amazon's rate per hour?");
let facebookDollarsPerHr = prompt("What is Facebook rate per hour?");
let facebookTotalPay = facebookDollarsPerHr * 10;
let googleTotalPay = googleDollarsPerHr * 6;
let amazonTotalPay = amazonDollarsPerHr * 4;
let totalPay = facebookTotalPay + googleTotalPay + amazonTotalPay;
alert("Your total pay this week is " + totalPay + " dollars.");

// Student Enrollment
let classNotFull = true;
let noScheduleConflict = false;
let canEnroll = classNotFull && noScheduleConflict
alert(canEnroll);

// Product Offer
let offerNotExpired = true;
let premiumMember = true;
let itemsBought;
let applyProductOffer = offerNotExpired && (itemsBought > 2 || premiumMember);
alert(applyProductOffer);





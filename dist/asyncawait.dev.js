"use strict";

function doubleAfter2Seconds(x) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(x * 2);
    }, 2000);
  });
}
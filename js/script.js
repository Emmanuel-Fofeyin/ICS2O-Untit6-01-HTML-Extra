// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: April 2022
// This file contains the JS functions for index.html

"use·strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Untit6-01-HTML-Extra/sw.js", {
    scope: "/ICS2O-Untit6-01-HTML-Extra/",
  })
}

/**
 * This function calculates volume of Sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius").value)

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3

  // output
  document.getElementById("area").innerHTML =
    "The volume is: " + volume.toFixed(2) + " mm³"
}

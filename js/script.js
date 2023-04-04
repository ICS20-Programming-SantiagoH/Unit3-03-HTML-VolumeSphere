// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of the sphere.
 */
function calculate() {  
  
  // Data being collected 
  let radius = parseFloat(document.getElementById('radius').value);

  //Data being processed
  let volume = 4.0 / 3.0 * Math.PI * Math.pow(radius,3);
  
  // Data being shown
  document.getElementById('volumeOfSphere').innerHTML = 'The volume of the sphere is ' + volume.toFixed(2) + 'cm³'
}
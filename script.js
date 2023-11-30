'use strict';



/**
 * Animasi masuk loading
 * 
 * pemuatan akan berakhir setelah dokumen dimuat
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
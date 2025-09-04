"use strict";

require("../");

// Both sides use the same OpenFreeMap style
var before = new maplibregl.Map({
  container: "before",
  style: "https://tiles.openfreemap.org/styles/liberty",
  zoom: 2
});

var after = new maplibregl.Map({
  container: "after",
  style: "https://tiles.openfreemap.org/styles/liberty",
  zoom: 2
});

// Use either of these patterns to select a container for the compare widget
var wrapperSelector = "#wrapper";
var wrapperElement = document.body.querySelectorAll("#wrapper")[0];

// available options
var options = {
  mousemove: true,
  orientation: "horizontal",
};

window.compare = new maplibregl.Compare(
  before,
  after,
  wrapperSelector
  // options
);

var closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", function (e) {
  after.getContainer().style.display = "none";
  window.compare.remove();
  after.remove();
});

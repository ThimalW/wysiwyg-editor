// toolbar button tooltips
var toolbarButtons = document.getElementsByClassName("btn");
var makeTooltip = function(tooltipText) {
  var tooltip = document.createElement("div");
  tooltip.classList.add("btn-tooltip");
  tooltip.innerText = tooltipText;

  return tooltip;
};

for (let i = 0; i < toolbarButtons.length; i++) {
  const tooltipText = toolbarButtons[i].getAttribute("tooltip");
  if (tooltipText) {
    toolbarButtons[i].appendChild(makeTooltip(toolbarButtons[i].getAttribute("tooltip")));
  }
}
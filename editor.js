// get toolbar buttons
var toolbarButtons = document.getElementsByClassName("btn");

// generate tooltip element
var makeTooltip = function(tooltipText) {
  var tooltip = document.createElement("div");
  tooltip.classList.add("btn-tooltip");
  tooltip.innerText = tooltipText;

  return tooltip;
};

// add toolbar button functionality
for (let i = 0; i < toolbarButtons.length; i++) {

  // button tooltips
  const tooltipText = toolbarButtons[i].getAttribute("tooltip");
  if (tooltipText) {
    toolbarButtons[i].appendChild(makeTooltip(toolbarButtons[i].getAttribute("tooltip")));
  }

  // button commands
  toolbarButtons[i].addEventListener("click", function(e) {
    const command = this.getAttribute("data-command");
    var commandValue = null;

    if (this.hasAttribute("data-command-value")) {
      commandValue = this.getAttribute("data-command-value");
    }

    document.execCommand(command, false, commandValue);

    console.log("Command:", command);
  });
}

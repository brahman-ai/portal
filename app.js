var script, id;

window.onload = () => {
  script = getUrlVars()["js"];
  id = getUrlVars()["id"];

  if (script === undefined) return;

  loadJS(script);
};

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

function loadJS(script) {
  console.log(`Loading script: ${script}, with id: ${id}`);
  var scriptTag = document.createElement("script");
  scriptTag.src = script + ".js";
  document.body.appendChild(scriptTag);
}

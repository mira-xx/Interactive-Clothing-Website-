function moreInfo() {
    const element = document.getElementById("more");
    element.innerHTML = "First published in March 10, 2015 <br> Language: English <br> Literary Awards: Booker Prize Nominess (2015),  Dayton Literary Peace Prize Nominee for Fiction (2016),  National Book Award Finalist for Fiction (2015)";
}

function backHome() {
    window.location.href ="formative.html";
}

var select = document.getElementById("selectNumber");
var options = ["1", "2", "3", "4", "5"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function multiple() {
  var opt = options[i];
  var el = document.createElement("option");
  var t = 10 
  var r = 1
  if(el> r){
   let c = t *el; 
   document.getElementById("showingSub").innerHTML = c; 
} else{
   document.getElementById("showingSub").innerHTML = "$10.00"; 
}
}


function moreInfo() {
    const element = document.getElementById("more");
    element.innerHTML = "Hardcover, 520 pages";
}
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
obj = JSON.parse(text);

function backHome() {
    window.location.href ="formative.html";
}
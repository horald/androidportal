window.onload = function load() {
  var mydata = JSON.parse(spielplatzdaten);
  var ni = document.getElementById('mydiv');
  var newdiv = document.createElement('div');
  var dochtml=''; 

  dochtml = '<table class="table">';
  dochtml = dochtml + '<tr>';
  dochtml = dochtml + '<th>NrX</th>';
  dochtml = dochtml + '<th>Spielplatz</th>';
  dochtml = dochtml + '<th>Stadtbezirk</th>';
  dochtml = dochtml + '<th>Stadtteil</th>';
  dochtml = dochtml + '<th>X-Koor</th>';
  dochtml = dochtml + '<th>Y-Koor</th>';
  dochtml = dochtml + '</tr>';

  var nr = 0;
  var index = 0;
  var lweiter = true; 
  mydata[0].features.forEach(function(entry) {
    index = index + 1;
    selstadtbezirk=document.auswahl.stadtbezirk.options.selectedIndex;
    if (document.auswahl.stadtbezirk.options[selstadtbezirk].text=='(ohne)') {
      lweiter=true;
    } else {
      if (entry.attributes.Stadtbezirk==document.auswahl.stadtbezirk.options[selstadtbezirk].text) {
        lweiter=true;
      } else {
        lweiter=false;
      }
    }
    if (lweiter) {
      selstadtteil=document.auswahl.stadtteil.options.selectedIndex;
      if (document.auswahl.stadtteil.options[selstadtteil].text=='(ohne)') {
        lweiter=true;
      } else {
        if (entry.attributes.Stadtteil==document.auswahl.stadtteil.options[selstadtteil].text) {
          lweiter=true;
        } else {
          lweiter=false;
        }
      }
    }
    if (lweiter) {
      nr = nr + 1;
      dochtml = dochtml + '<tr>';
      dochtml = dochtml + '<td>'+nr+'</td>';
      dochtml = dochtml + '<td><a href="showdata.html?id='+index+'">'+entry.attributes.Spielplatzname+'</a></td>';
      dochtml = dochtml + '<td>'+entry.attributes.Stadtbezirk+'</td>';
      dochtml = dochtml + '<td>'+entry.attributes.Stadtteil+'</td>';
      dochtml = dochtml + '<td>'+entry.geometry.x+'</td>';
      dochtml = dochtml + '<td>'+entry.geometry.y+'</td>';
      dochtml = dochtml + '</tr>';
    }
});

  dochtml = dochtml + '</table>';
  newdiv.innerHTML = dochtml;
  ni.appendChild(newdiv);

}


function get_value(e) {
 var v = e.options[e.selectedIndex].value;
 //alert("Wert: "+v);
 var t = e.options[e.selectedIndex].text;
 //alert("Text: "+t);
}


showGreen();
function showGreen() {
  show('showYellow()', 'gray', 'gray', 'green');
  setTimeout(showYellow,3000)
}

function showYellow()  {
show('showRed()', 'gray', 'yellow', 'gray');
setTimeout(showRed,3000)
}

function showRed() {
    show('showorange()','red', 'gray', 'gray');
    setTimeout(showorange,3000)
}

function showorange() {
    show('showGreen()','red','yellow','gray')
    setTimeout(showGreen,3000)

}

function show(myFunction, lamp1, lamp2, lamp3) {
      document.getElementById('app').innerHTML = /*HTML*/`
          <div id="traffic" onclick="${myFunction}">
              ${createLamp(lamp1)}
              ${createLamp(lamp2)}
              ${createLamp(lamp3)}
          </div>
      `;
  }


function createLamp(color) {
return /*HTML*/`
<div class="light" style="background-color: ${color};"></div>
`;
}
// toast JS
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


// product pictures
// boat pics
function changeImage1(boat2) {
  document.getElementById('showImg').src = `productpics/boat2.jpg`;
}

function changeImage2(redboat) {
  document.getElementById('showImg').src = `imgs/boatred.png`;
}

function changeImage3(blueboat) {
  document.getElementById('showImg').src = `imgs/boatblue.png`;
}
// boat pics

// car pics
function changeImage4(car2) {
  document.getElementById('showImg2').src = `productpics/car2.jpg`;
}

function changeImage5(redcar) {
  document.getElementById('showImg2').src = `imgs/carred.png`;
}

function changeImage6(bluecar) {
  document.getElementById('showImg2').src = `imgs/carblue.png`;
}
// car pics

// train pics
function changeImage7(car2) {
  document.getElementById('showImg3').src = `productpics/train3.jpg`;
}

function changeImage8(redcar) {
  document.getElementById('showImg3').src = `imgs/trainred.png`;
}

function changeImage9(bluecar) {
  document.getElementById('showImg3').src = `imgs/trainblue.png`;
}
//train pics

//plane pics
function changeImage10(plane2) {
  document.getElementById('showImg4').src = `productpics/plane2.jpg`;
}

function changeImage11(redplane) {
  document.getElementById('showImg4').src = `imgs/planered.png`;
}

function changeImage12(blueplane) {
  document.getElementById('showImg4').src = `imgs/planeblue.png`;
}
//plane pics

//block pics
function changeImage13(block2) {
  document.getElementById('showImg5').src = `productpics/block2.jpg`;
}

function changeImage14(redblocks) {
  document.getElementById('showImg5').src = `imgs/blocksred.png`;
}

function changeImage15(blueblocks) {
  document.getElementById('showImg5').src = `imgs/blocksblue.png`;
}
//block pics







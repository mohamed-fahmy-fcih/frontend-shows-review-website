// HAMBURGER NAV DISPLAY

var opened = false;

function openHamb() {
  var menu = document.querySelector(".mobileShow");

  if (opened == false) {
    menu.style.left = "0";
    opened = true;
  } else {
    menu.style.left = "100%";
    opened = false;
  }
}

// BACKGROUND MODES

var body = document.querySelector('body');

var sittings = document.querySelector('.sittings');
var circle = document.querySelector('.sittings .switch .circle');
var circle2 = document.querySelector('.mobileShow .switch .circle');

var modeType = 1; // 0 => light, 1 => dark
var x = localStorage.getItem("ModeIndex"); //save_Data of DarkOrLight Mode


function dataModeChecker(data) {
  if (data) {
    if (data == 1) {
      body.classList.remove('lightMode');
      body.classList.add('darkMode');
      circle.style.transform = 'translateX(-1px)';
      circle2.style.transform = 'translateX(-1px)';
      // console.log("DarkMode");
      modeType = 1;
      localStorage.setItem("ModeIndex", modeType);
    } else {
      body.classList.remove('darkMode');
      body.classList.add('lightMode');
      circle.style.transform = 'translateX(26px)';
      circle2.style.transform = 'translateX(26px)';
      // console.log("LightMode");
      modeType = 0;
      localStorage.setItem("ModeIndex", modeType);
    }
  } else {
    switcher();
  }
}
dataModeChecker(x);

function switcher() {
  if (modeType == 0) {
    body.classList.remove('lightMode');
    body.classList.add('darkMode');
    circle.style.transform = 'translateX(-1px)';
    circle2.style.transform = 'translateX(-1px)';
    modeType = 1;
    localStorage.setItem("ModeIndex", modeType);
  } else {
    body.classList.remove('darkMode');
    body.classList.add('lightMode');
    circle.style.transform = 'translateX(26px)';
    circle2.style.transform = 'translateX(26px)';
    modeType = 0;
    localStorage.setItem("ModeIndex", modeType);
  }
}

function btnChecker() {
  if (x == 1) {
    circle.style.transform = 'translateX(-1px)';
    circle2.style.transform = 'translateX(-1px)';
  } else {
    circle.style.transform = 'translateX(26px)';
    circle2.style.transform = 'translateX(26px)';
  }
}

// SETTINGS DISPLAY

var checkBtn = false; // false => closed, true => opened

function settingsBtn() {
  if (checkBtn == true) {
    checkBtn = false;
    sittings.style.opacity = '0';
    sittings.style.zIndex = '-1';
  } else {
    checkBtn = true;
    sittings.style.opacity = '1';
    sittings.style.zIndex = '3';x
  }
}
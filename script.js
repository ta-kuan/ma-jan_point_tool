const number_player = document.querySelector(".number_player")
const yonmatonB = document.querySelector(".yonmaton");
const yonmahanB = document.querySelector(".yonmahan");
const sanmatonB = document.querySelector(".sanmaton");
const sanmahanB = document.querySelector(".sanmahan");
let n1 = 0;
let n2 = 0;
let saiclasses = ["one","two","three","four","five","six"];
const me1 = document.querySelector(".me1");
const me2 = document.querySelector(".me2");
let saiareaB = 0;
const saiarea = document.querySelector(".saiarea");
const center = document.querySelector(".center");
const karioya = document.querySelector(".karioya");
let saisum = 0;
const sita = document.querySelector(".sita");
const migi = document.querySelector(".migi");
const ue = document.querySelector(".ue");
const hidari = document.querySelector(".hidari");
let hougakuclasses = ["ton","nan","sya","pei"];
const sai1 = document.querySelector(".sai1");
const sai2 = document.querySelector(".sai2");
let start = 0;
const startB = document.querySelector(".start");
let startclasses = ["migiS","ueS","hidariS","sita","off"];
let yonsan = 0;

number_player.classList.remove("off");
center.classList.add("off");
sai1.classList.remove("off");
sai2.classList.remove("off");
startB.classList.add("off");

yonmatonB.addEventListener("click", function () {
  number_player.classList.add("off");
  center.classList.remove("off");
  yonsan = 4;
});
yonmahanB.addEventListener("click", function () {
  number_player.classList.add("off");
  center.classList.remove("off");
  yonsan = 4;
});
sanmatonB.addEventListener("click", function () {
  number_player.classList.add("off");
  center.classList.remove("off");
  yonsan = 3;
});
sanmahanB.addEventListener("click", function () {
  number_player.classList.add("off");
  center.classList.remove("off");
  yonsan = 3;
});
function spinsai() {
  n1 = Math.floor(Math.random() * 6) + 1;
  switch (n1) {
    case 1:
      me1.classList.remove(...saiclasses);
      me1.classList.add("one");
      break;
    case 2:
      me1.classList.remove(...saiclasses);
      me1.classList.add("two");
      break;
    case 3:
      me1.classList.remove(...saiclasses);
      me1.classList.add("three");
      break;
    case 4:
      me1.classList.remove(...saiclasses);
      me1.classList.add("four");
      break;
    case 5:
      me1.classList.remove(...saiclasses);
      me1.classList.add("five");
      break;
    case 6:
      me1.classList.remove(...saiclasses);
      me1.classList.add("six");
      break;
  }
  n2 = Math.floor(Math.random() * 6) + 1;
  switch (n2) {
    case 1:
      me2.classList.remove(...saiclasses);
      me2.classList.add("one");
      break;
    case 2:
      me2.classList.remove(...saiclasses);
      me2.classList.add("two");
      break;
    case 3:
      me2.classList.remove(...saiclasses);
      me2.classList.add("three");
      break;
    case 4:
      me2.classList.remove(...saiclasses);
      me2.classList.add("four");
      break;
    case 5:
      me2.classList.remove(...saiclasses);
      me2.classList.add("five");
      break;
    case 6:
      me2.classList.remove(...saiclasses);
      me2.classList.add("six");
      break;
  }
}
function risetmuki() {
  migi.classList.remove(...hougakuclasses);
  ue.classList.remove(...hougakuclasses);
  sita.classList.remove(...hougakuclasses);
  hidari.classList.remove(...hougakuclasses);
}
function hougakuyon() {
  if (yonsan === 4) {
    switch (saisum) {
      case 2:
      case 6:
      case 10:
        risetmuki();
        migi.classList.add("ton");
        ue.classList.add("nan");
        hidari.classList.add("sya");
        sita.classList.add("pei");
        start = 1;
        break;
      case 3:
      case 7:
      case 11:
        risetmuki();
        migi.classList.add("pei");
        ue.classList.add("ton");
        hidari.classList.add("nan");
        sita.classList.add("sya");
        start = 2;
        break;
      case 4:
      case 8:
      case 12:
        risetmuki();
        migi.classList.add("sya");
        ue.classList.add("pei");
        hidari.classList.add("ton");
        sita.classList.add("nan");
        start = 3;
        break;
      case 5:
      case 9:
        risetmuki();
        migi.classList.add("nan");
        ue.classList.add("sya");
        hidari.classList.add("pei");
        sita.classList.add("ton");
        start = 4;
        break;
    }
  } else if (yonsan === 3) {
    switch (saisum) {
      case 2:
      case 5:
      case 8:
      case 11:
        risetmuki();
        migi.classList.add("ton");
        hidari.classList.add("nan");
        sita.classList.add("sya");
        start = 1;
        break;
      case 3:
      case 6:
      case 9:
      case 12:
        risetmuki();
        migi.classList.add("sya");
        hidari.classList.add("ton");
        sita.classList.add("nan");
        start = 2;
        break;
      case 4:
      case 7:
      case 10:
        risetmuki();
        migi.classList.add("nan");
        hidari.classList.add("sya");
        sita.classList.add("ton");
        start = 3;
        break;
    }
  }
}
saiarea.addEventListener("click", function () {
  if (saiareaB === 0) {
    spinsai();
    karioya.classList.add("off");
    saiareaB = 1;
    saisum = n1 + n2;
    hougakuyon();
  } else if (saiareaB === 1) {
    spinsai();
    sai1.classList.add("off");
    sai2.classList.add("off");
    saiareaB = 2;
    saisum = n1 + n2;
    startB.classList.remove(...startclasses);
    if (yonsan === 4) {
      switch (start) {
        case 1:
          startB.classList.add("migiS")
          break;
        case 2:
          startB.classList.add("ueS")
          break;
        case 3:
          startB.classList.add("hidariS")
          break;
        case 4:
          startB.classList.add("sitaS")
          break;
      }
    } else if (yonsan === 3) {
      switch (start) {
        case 1:
          startB.classList.add("migiS")
          break;
        case 2:
          startB.classList.add("hidariS")
          break;
        case 3:
          startB.classList.add("sitaS")
          break;
      }
    }
  }
});
startB.addEventListener("click", function () {
  startB.classList.add("off");
});

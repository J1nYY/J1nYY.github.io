let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
alert("Ouch! Stop poking me!");
  if (mySrc === "C:/Users/user/noname.jpg") {
    myImage.setAttribute("src", "C:/Users/user/제목 없음.jpg");
  } else {
    myImage.setAttribute("src", "C:/Users/user/noname.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
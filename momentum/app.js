const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "blue";
}
function handleTitlemouseenter() {
  title.style.color = "red";
}

function handleTitlemouseleave() {
  title.style.color = "black";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "red";
}

function handleWindowCopy() {
  title.innerText = "복사했지롱";
}

title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleTitlemouseenter);
title.addEventListener("mouseleave", handleTitlemouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

const loginInput = document.querySelector(".loginpage__name");
const loginBtn = document.querySelector(".loginpage__btn");

loginInput.focus();

function onloginBtnChange() {
  const username = loginInput.value;
  if (username === "") {
    loginBtn.disable = true;
    loginBtn.classList.remove("active_btn");
  } else {
    loginBtn.disable = false;
    loginBtn.classList.add("active_btn");
  }
}

function onloginBtnClick() {
  console.log(loginInput.value);
}

loginInput.addEventListener("input", onloginBtnChange);
loginBtn.addEventListener("click", onloginBtnClick);

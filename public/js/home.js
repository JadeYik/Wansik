// let profileIconCir = document.querySelector(".user-icon");
// let userNameHeader = document.querySelector(".user-name");
// let loginHeader = document.querySelector(".login-gird");
// let userDataHidden = document.querySelector(".hidden");
// let loginButton = document.querySelector(".login-button");
// let isLoggedIn = false;

window.addEventListener("load", async () => {
  await login(); // Call your login function to update the isLoggedIn variable
});


// function toggleLoginState() {

//   if (isLoggedIn) {
//     loginButton.classList.add("hidden");
//     userDataHidden.classList.remove("hidden");
//   } else {
//     loginButton.classList.remove("hidden");
//     userDataHidden.classList.add("hidden");
//   }
// }
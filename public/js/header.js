let userNameHeader = document.querySelector(".user-name");
let profileIconCir = document.querySelector(".user-icon");

// profileIconCir
// userNameHeader
let isloggedIn = false;
window.addEventListener("load", async () => {
  console.log("onload");
  await getUserData();
});

async function getUserData() {
  const resp = await fetch("/profile");
  console.log("ok: ", resp.ok);
  if (resp.ok) {
    isloggedIn = true;
    Login_Logout_handler()
  } else {
    isloggedIn = false;
    Login_Logout_handler()
    return
  }
  const profile = await resp.json();

  const getProfile = profile.profileReq;

  let { name, profile_image } = getProfile;

  console.log({ name, profile_image });

  profileIconCir.innerHTML = `   <div class="user-icon">
              
  <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
  </div>`;
  userNameHeader.innerHTML = `<div class="user-name">${getProfile.name}</div>`;
}

async function Login_Logout_handler() {
  let loginHeader = document.querySelector(".login-btn");
  let logoutHeader = document.querySelector(".logout-btn");
  if (!loginHeader || !logoutHeader) {
    return
  }
  logoutHeader.style.display = "none";
  loginHeader.style.display = "none";
  console.log({
    isloggedIn
  })
  if (isloggedIn) {

      logoutHeader.style.display = "block";
   
  } else {
    userNameHeader.style.display = 'none'
    profileIconCir.style.display = 'none'
    loginHeader.style.display = "block";
  }
}

function logout() {
  console.log("logout")
}
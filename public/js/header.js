let userNameHeader;
let profileIconCir;

window.onload = async () => {

    profileIconCir = document.querySelector(".user-icon");
    userNameHeader = document.querySelector(".user-name");
 
  
    getUserData();
  };


  async function getUserData() {
    const resp = await fetch("/profile");
    const profile = await resp.json();
  
    const getProfile = profile.profileReq;
  
    let { name, email, phone, profile_image } = getProfile;
  
    // console.log({ name, email, phone, profile_image });
  
    profileIconCir.innerHTML = `   <div class="user-icon">
              
  <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
  </div>`;
    userNameHeader.innerHTML = `<div class="user-name">${getProfile.name}</div>`
   
    }
let userNameHeader = document.querySelector(".user-name");
let profileIconCir = document.querySelector(".user-icon");
// profileIconCir 
// userNameHeader 


  async function getUserData() {
    const resp = await fetch("/profile");
    const profile = await resp.json();
  
    const getProfile = profile.profileReq;
  
    let { name, profile_image } = getProfile;
  
    console.log({ name, profile_image });
  
    profileIconCir.innerHTML = `   <div class="user-icon">
              
  <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
  </div>`;
    userNameHeader.innerHTML = `<div class="user-name">${getProfile.name}</div>`
   
    }
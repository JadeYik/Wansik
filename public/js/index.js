let userOfProfile;
let profileIconSqu;
let profileIconCir;
let usernameHeader;

window.onload = async () => {
  //fake login
  await fetch("/login-dev", {
    method: "POST",
  });
  userOfProfile = document.querySelector("#profile-text-container");
  profileIconSqu = document.querySelector("#profile-icon");
  profileIconCir = document.querySelector(".user-icon");
  userNameHeader = document.querySelector(".user-name");

  getprofileForm();
  updateProfileData();
};

async function getprofileForm() {
  const resp = await fetch("/profile");
  const profile = await resp.json();

  const getProfile = profile.result;
  let { name, email, phone, profile_image } = getProfile;

  console.log({ name, email, phone, profile_image });

  userOfProfile.innerHTML = `  
  <div class="profile-username">Username : ${getProfile.name}</div>
  <div class="profile-email">Email : ${getProfile.email}</div>
  <div class="profile-phone">Phone : ${getProfile.phone}</div>`;
  profileIconSqu.innerHTML = `  <div id="profile-icon">
  <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
</div>`;
  profileIconCir.innerHTML = `   <div class="user-icon">
            
<img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
</div>`;
  userNameHeader.innerHTML = `<div class="user-name">${getProfile.name}</div>`;
}

function updateProfileData() {
  document.querySelector("#profile-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = 1; // Set the user ID as needed
    const form = event.target;

    const formData = new FormData(form);

    formData.set("name", form.name.value);
    formData.set("email", form.email.value);
    formData.set("phone", form.phone.value);
    formData.set("profile_image", form.icon.files[0]);

    console.log(formData);

    try {
      const response = await fetch(`/profile/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response as needed
       
        window.location = "/html/profile.html"
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  });
}


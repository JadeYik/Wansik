let userOfProfile;
let profileIconSqu;
// let profilepageIconCir;
// let usernameHeaderProfile;
let historyTable;

window.onload = async () => {

  userOfProfile = document.querySelector("#profile-text-container");
  profileIconSqu = document.querySelector("#profile-icon");
  // profilepageIconCir = document.querySelector(".user-icon");
  // usernameHeaderProfile = document.querySelector(".user-name");
  historyTable = document.querySelector(".table-container");

  
  getUserData()
  getprofileForm();
  updateProfileData();
};

async function getprofileForm() {
  const resp = await fetch("/profile");
  const profile = await resp.json();
console.log(profile)
  const getProfile = profile.profileReq;
  const getHistory = profile.historyReq;

  let { name, email, phone, profile_image } = getProfile;

  console.log({ name, email, phone, profile_image });

  userOfProfile.innerHTML = `  <div class="card">
  <div class="card-header">
    ${getProfile.name}  Profile
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <div class="container ">
        <div class="row">
          <div class="col-6 col-sm-4 text-profile-container">Username :</div>
          <div class="col-6 col-sm-4 text-profile-container-data">${getProfile.name}</div>
      
          <div class="w-100 d-none d-md-block"></div>
      
          <div class="col-6 col-sm-4 text-profile-container">Email :</div>
          <div class="col-6 col-sm-4 text-profile-container-data">${getProfile.email}</div>

          <div class="w-100 d-none d-md-block"></div>
      
          <div class="col-6 col-sm-4 text-profile-container">Phone :</div>
          <div class="col-6 col-sm-4 text-profile-container-data">${getProfile.phone}</div>
        </div>
      </div>
    </blockquote>
  </div>
</div>`;

  profileIconSqu.innerHTML = `  <div id="profile-icon">
  <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
</div>`;
// profilepageIconCir.innerHTML = `   <div class="user-icon">
            
// <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
// </div>`;
// usernameHeaderProfile.innerHTML = `<div class="user-name">${getProfile.name}</div>`;

  console.log(getHistory[1].restaurant_name)
  console.log(getHistory[0].restaurant_name)
  
  for(const history of getHistory){
    historyTable.innerHTML += `
    <tbody>
    <tr>
      <th scope="row">${history.guest_name}</th>
      <td>${history.appointment_date}</td>
      <td>${history.appointment_time}</td>
      <td>${history.restaurant_name}</td>
      <td>${history.accept}</td>
      <td>${history.cancel}</td>
    </tr>
  
  </tbody> 
    `
  }



//   historyTable.innerHTML = `
//   <tbody>
//   <tr>
//     <th scope="row">${history.guest_name}</th>
//     <td>${history.appointment_dat}</td>
//     <td>${history.appointment_time}</td>
//     <td>${history.restaurant_name}</td>
//     <td>${history.accept}</td>
//     <td>${history.cancel}</td>
//   </tr>

// </tbody>
  
//   `


}

function updateProfileData() {
  document.querySelector("#profile-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = 1; // Set the user ID as needed
    const form = event.target;

    const formData = new FormData(form);

    // formData.set("name", form.name.value);
    // formData.set("email", form.email.value);
    // formData.set("phone", form.phone.value);
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        redirectToNewPage();
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  });
}

function redirectToNewPage() {
  setTimeout(() => {
    window.location = "/html/profile.html";
  }, 700);
}

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
  usernameHeader = document.querySelector(".user-name");

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
  usernameHeader.innerHTML = `<div class="user-name">${getProfile.name}</div>`;
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

// async function initProfileForm() {
// //   const formData = new FormData();
// //  await formData.append("name", inputProfileName.value);
// //  await formData.append("email", inputProfileEmail.value);
// //  await  formData.append("phone", inputProfilePhone.value);
// //  await  formData.append("icon", imageFileElement.files[0]);

//   const resp = await fetch("/profile", {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     body: formData,
//   });

//   updateProfile(inputProfileName.value, inputProfileEmail.value, inputProfilePhone.value, imageFileElement.files[0]);
// }

// function updateProfile(name, email, phone, icon) {
// //   Check if the input data is the same as the data in the output
//   const isNameSame = name === outputProfileContainer.querySelector(".profile-username").textContent;
//   const isEmailSame = email === outputProfileContainer.querySelector(".profile-email").textContent;
//   const isPhoneSame = phone === outputProfileContainer.querySelector(".profile-phone").textContent;

// //   Update the show div only if the input data is different
//   if (!isNameSame || !isEmailSame || !isPhoneSame || !icon) {
//     // Clone the template content
//     const templateClone = templateData.content.cloneNode(true);

//     // Update the cloned template with new data
//     templateClone.querySelector(".profile-username").textContent = name;
//     templateClone.querySelector(".profile-email").textContent = email;
//     templateClone.querySelector(".profile-phone").textContent = phone;
//     templateClone.querySelector(".profile-icon").style.backgroundImage = `url(${icon})`;

//     // Clear the original data in the output container
//     outputProfileContainer.innerHTML = "";

//     // Append the updated template to the output container
//     outputProfileContainer.appendChild(templateClone);
//   }
// }

// // Submit event
// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();

// //   Get the input values
//   const newName = inputProfileName.value;
//   const newEmail = inputProfileEmail.value;
//   const newPhone = inputProfilePhone.value;
//   const uploadedIcon = imageFileElement.files[0];

// //   Create a FileReader to read the image file
//   const reader = new FileReader();
//   reader.onload = function (event) {
//     const imageUrl = event.target.result;

//     // Update the output with the new data and image
//     updateProfile(newName, newEmail, newPhone, imageUrl);
//   };

// //   Read the image file as a data URL
//   reader.readAsDataURL(uploadedIcon);
// });

//   for (const Profiles of Profile) {
//     const profileClone = templateData.content.cloneNode(true);
//     profileClone.querySelector("#name").textContent = Profiles.name;
//     profileClone.querySelector("#email").textContent = Profiles.email;
//     profileClone.querySelector("#phone").textContent = Profiles.phone;
//     profileClone.querySelector("#icon").src = Profiles.icon;
//     profileContainrData.appendChild(profileClone);
//   }
// }

// .addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const form = e.target
//     const formObject = {
//     name: form.name.value,
//     email: form.email.value,
//     phone: form.phone.value,
// icon: form.icon.value

// const resp = await fetch("/profile", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formObject)
// })

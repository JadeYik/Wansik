let userOfProfile;
let profileIcon;
let templateDataOutput;

window.onload = () => {
  userOfProfile = document.querySelector("#profile-text-container");
  profileIcon = document.querySelector("#profile-icon");
  templateDataOutput = document.querySelector("#profile-template-output");
  getprofileForm();
};

async function getprofileForm() {
  const resp = await fetch("/profile/:id");
  const profile = await resp.json();
  const userProfile = profile.profileReqData.rows.id[3]



  function outputProfile(profile) {
    let {name, email, phone, profile_image} = profile
    const profileCloneOutput = templateDataOutput.content.cloneNode(true);

    // Update the cloned template with new data
    profileCloneOutput.querySelector(".profile-username").textContent = name;
    profileCloneOutput.querySelector(".profile-email").textContent = email;
    profileCloneOutput.querySelector(".profile-phone").textContent = phone;
    profileCloneOutput.querySelector("#profile-icon").src = profile_image;

    // Clear the original data in the output container
    userOfProfile.innerHTML = "";
    profileIcon.innerHTML = "";




    // Append the updated template to the output container
    userOfProfile.appendChild(profileCloneOutput);
    profileIcon.appendChild(profileCloneOutput);
    
  }

  outputProfile(profile);

  // const Profile = await resp.json();
  // usernameOfProfile.innerHTML = '';

  // console.log(Profile.profileReqData.rows)
  // console.log(Profile.profileReqData.rows[0].profile_image)
  // console.log(usernameOfProfile)

  // // Convert the image data to a Base64-encoded data URL
  // const base64Image = Buffer.from(profile_image).toString('base64');
  // const dataUrl = `data:image/jpeg;base64,${base64Image}`;
  // // Pass the data URL to the template
  // res.render('template', { imageUrl: dataUrl });
}

// // const Profile = await resp.json();
// // To show
// const outputProfileIcon = document.querySelector(".profile-icon");
// const outputProfileContainer = document.querySelector("#profile-text-container");

// // To input
// const inputProfileName = document.querySelector("#name");
// const inputProfileEmail = document.querySelector("#email");
// const inputProfilePhone = document.querySelector("#phone");
// const imageFileElement = document.querySelector("#icon");

// // Submit Btn
// const submitButton = document.querySelector("#modal-submitBtn");

// // Get template
// const templateData = document.querySelector("#profile-template");

// window.onload = async () => {
//   await initProfileForm();
// };

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

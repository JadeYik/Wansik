const y = {};
y.name = "t";
console.log(y);

let userOfProfile;
let profileIconSqu;
let profileIconCir;
let usernameHeader;
let historyTable;

window.onload = async () => {
  //fake login
  await fetch("/login-dev", {
    method: "POST",
  });
  userOfProfile = document.querySelector("#profile-text-container");
  profileIconSqu = document.querySelector("#profile-icon");
  profileIconCir = document.querySelector(".user-icon");
  userNameHeader = document.querySelector(".user-name");
  historyTable = document.querySelector(".table-container");


  const page = new URLSearchParams(location.search).get("p");
  const quantityPage = new URLSearchParams(location.search).get("q");
  const restData = new URLSearchParams(location.search).get("rest");
  const pageDetail = { page: page, quantityPage: quantityPage };
  contentInfo(pageDetail);


  getprofileForm();
  updateProfileData();
};

async function getprofileForm() {
  const resp = await fetch("/profile");
  const profile = await resp.json();

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
  profileIconCir.innerHTML = `   <div class="user-icon">
              
  <img src="/usericon/${getProfile.profile_image}" alt="user-icon" />
  </div>`;
  userNameHeader.innerHTML = `<div class="user-name">${getProfile.name}</div>`;

  console.log(getHistory[1].restaurant_name);
  console.log(getHistory[0].restaurant_name);

  for (const history of getHistory) {
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
      `;
  }
}

function updateProfileData() {
    document.querySelector("#profile-form").addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const id = 1; 
      const form = event.target;
  
      const formData = new FormData(form);
  
      formData.set("profile_image", form.icon.files[0]);
  
      console.log(formData);
  
      try {
        const response = await fetch(`/profile/${id}`, {
          method: "PUT",
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
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
  
  async function userInfo() {
    const userInfoData = await fetch(`/uerInfo`);
    const userInfo = await userInfoData.json();
    const userInfoShow = document.querySelector(".user-infor");
    // const {userName:name,userProIcon:pic} = userInfo
    userInfoShow.innerHTML = `<div><img src="/usericon/${userInfo.profile_image}" class="card-img-bottom circleImg fa-user fa-3x"></div><div class="user-name">${userInfo.name}</i></div>`;
  }
  
  async function contentInfo(pn) {
    const reviewsPage = await fetch(`/reviewTotal/q/${pn.quantityPage}/p/${pn.page}`);
    const resPageReviews = await reviewsPage.json();
  
    const pageNumber = +resPageReviews.reviewNumbers + 1;
  
    const reviewContainer = document.querySelector(".review-container");
    const pageContainer = document.querySelector(".page-container");
    function paint(i) {
      let x = "";
      if (i.image_upload === null) {
        x = `
        <div class="reviewCard card">
          <div class="row">
            <div class="col-md-2 col-sm-12">
            <div class="text-center">
              <div class="midUsername">${i.user_name}</div>
              <div><img src="/usericon/${
                i.user_profile_image
              }" class="card-img-bottom circleImg"></div>
            </div>
          </div>
          <div class="col-md-10 col-sm-12">
            <h5 class="title">${i.title}</h5>
            <div>${i.restaurants_name}</div>
            <p class="content">${i.review_content}</p>
            <small class="text-body-secondary">Posted at ${dateFns.format(
              i.date_of_review,
              "MM/DD/YYYY"
            )}  ${i.time_of_review.substring(0, 5)}</small></p>
          </div>
        </div>`;
      } else {
        x = `
        <div class="reviewCard card">
          <div class="row">
            <div class="col-md-2 col-sm-12">
            <div class="text-center">
              <div class="midUsername">${i.user_name}</div>
              <div><img src="/usericon/${
                i.user_profile_image
              }" class="card-img-bottom circleImg"></div>
            </div>
          </div>
          <div class="col-md-10 col-sm-12">
            <h5 class="title">${i.title}</h5>
            <div>${i.restaurants_name}</div>
            <p class="content">${i.review_content}</p>
            <img src="/uploads/${i.image_upload}" class="card-img-bottom imgHeight">
            <small class="text-body-secondary">Posted at ${dateFns.format(
              i.date_of_review,
              "MM/DD/YYYY"
            )}  ${i.time_of_review.substring(0, 5)}</small></p>
          </div>
        </div>`;
      }
      return x;
    }
 
  
    for (let i = 1; i < pageNumber; i++) {
      pageContainer.innerHTML += `<a href="http://localhost:8080/html/review.html?q=5&p=${i}"><button type="button" id="page${i}" class="btn btn-warning m-1 page${i}">${i}</button></a>`;
    }

    const dataResReviews = await fetch(`/reviewDisplay/q/${pn.quantityPage}/p/${pn.page}`);
    const resReviews = await dataResReviews.json();
    const reviews = resReviews.reviewData;
   
    let x = "";
   
    for (const review of reviews) {
        x = paint(review)
        reviewContainer.innerHTML += x;
      }
  
    }
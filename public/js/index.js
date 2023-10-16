// const y = {};
// y.name = "t";
// console.log(y);

let userOfProfile;
let profileIconSqu;
let profileIconCir;
let usernameHeader;
let historyTable;

window.onload = async () => {

  userOfProfile = document.querySelector("#profile-text-container");
  profileIconSqu = document.querySelector("#profile-icon");
  profileIconCir = document.querySelector(".user-icon");
  userNameHeader = document.querySelector(".user-name");
  historyTable = document.querySelector(".table-container");


  // const page = new URLSearchParams(location.search).get("p");
  // const quantityPage = new URLSearchParams(location.search).get("q");
  // const restData = new URLSearchParams(location.search).get("rest");
  // const pageDetail = { page: page, quantityPage: quantityPage };
  // contentInfo(pageDetail);
  // getprofileForm();
  getUserInfo() 
  login()
};



  

  
  async function userInfo() {
    const userInfoData = await fetch(`/uerInfo`);
    const userInfo = await userInfoData.json();
    const userInfoShow = document.querySelector(".user-infor");
    // const {userName:name,userProIcon:pic} = userInfo
    userInfoShow.innerHTML = `<div><img src="/usericon/${userInfo.profile_image}" class="card-img-bottom circleImg fa-user fa-3x"></div><div class="user-name">${userInfo.name}</i></div>`;
  }
  

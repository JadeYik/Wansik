window.onload = () => {
  async function fakeLogin() {
    await fetch("/login-dev", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
  }
  fakeLogin()
  const page = new URLSearchParams(location.search).get("p");
  const quantityPage = new URLSearchParams(location.search).get("q");
  const restData = new URLSearchParams(location.search).get("rest");
  const pageDetail = { page: page, quantityPage: quantityPage };
  contentInfo(pageDetail);
};
/*TODO
1. GET AMOUNT OF REVIEW FROM SERVER (ROUTE: /reviewDisplay/ )
2. COUNT HOW MAY I NEED BY THE (1.) result
3. for-loop (gen page btn to somewhere (e.g doc.qurSlt('#id')) and assign click event)
4. 
*/
//This is for Page change

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
  //feature will coming soon!!!!!!!!!!!!!!!!!!!
  // let selectedValue = "";
  // const pageNum = document.querySelector("#nuSelect").addEventListener('change',function(event){
  //   selectedValue = event.target.value
  //   console.log({selectedValue})
  // });
 

  for (let i = 1; i < pageNumber; i++) {
    pageContainer.innerHTML += `<a href="http://localhost:8080/html/review.html?q=5&p=${i}"><button type="button" id="page${i}" class="btn btn-warning m-1 page${i}">${i}</button></a>`;
  }
  // for (let i = 1; i < pageNumber; i++) {
  //   document.querySelector(`#page${i}`).addEventListener("click", async function () {

  //   });
  // }
  const dataResReviews = await fetch(`/reviewDisplay/q/${pn.quantityPage}/p/${pn.page}`);
  const resReviews = await dataResReviews.json();
  const reviews = resReviews.reviewData;
 
  let x = "";
 
  for (const review of reviews) {
      x = paint(review)
      reviewContainer.innerHTML += x;
    }

  }


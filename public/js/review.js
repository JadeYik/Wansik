window.onload = () => {
  // const page = new URLSearchParams(location.search).get("p");
  // const quantityPage = new URLSearchParams(location.search).get("q");
  const restDataInt = (new URLSearchParams(location.search).get("rest"));
  console.log({restDataInt})
  contentInfo(restDataInt);
  getUserData();
  getprofileForm();
  updateProfileData();
};
/*TODO
1. GET AMOUNT OF REVIEW FROM SERVER (ROUTE: /reviewDisplay/ )
2. COUNT HOW MAY I NEED BY THE (1.) result
3. for-loop (gen page btn to somewhere (e.g doc.qurSlt('#id')) and assign click event)
4. 
*/
//This is for Page change

async function contentInfo(mass) {
  try {
    // const reviewsPage = await fetch(`/reviewTotal/rest/${pn.rest}/q/${pn.quantityPage}/p/${pn.page}`);
    // const resPageReviews = await reviewsPage.json();

    // const pageNumber = +resPageReviews.reviewNumbers + 1;
    
    const reviewContainer = document.querySelector(".review-container");
    const oneRestaurantInfo = document.querySelector("#restaurant-list")
    const submitButton = document.querySelector("#submitButton")
    
    // const pageContainer = document.querySelector(".page-container");

    //feature will coming soon!!!!!!!!!!!!!!!!!!!
    // let selectedValue = "";
    // const pageNum = document.querySelector("#nuSelect").addEventListener('change',function(event){
    //   selectedValue = event.target.value
    //   console.log({selectedValue})
    // });

    // for (let i = 1; i < pageNumber; i++) {
    //   pageContainer.innerHTML += `<a href="http://localhost:8080/html/review.html?q=5&p=${i}"><button type="button" id="page${i}" class="btn btn-warning m-1 page${i}">${i}</button></a>`;
    // }
    // for (let i = 1; i < pageNumber; i++) {
    //   document.querySelector(`#page${i}`).addEventListener("click", async function () {

    //   });
    // }
    let restId = "";
    if (mass) {
      restId = `rest=${mass}`;
    }


if(mass){
    let restRoute ="/oneRestaurant?"+restId

    const dataRestInfo = await fetch(restRoute);
    const restInfo = (await dataRestInfo.json());



    oneRestaurantInfo.innerHTML = `
  <div class="card mb-3 restaurant-card" >
  <div class="row g-0">
    <div class="col-md-4 rest-image">
      <img src="${restInfo.restaurant_image}" class="img-fluid rounded-start " alt="restaurant image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><a href="/html/review?rest=${review.restaurants_id}"> ${restInfo.restaurant_name}</a></h5>
        <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${restInfo.district}</p>
        <p class="card-text"><i class="fa-solid fa-map-location-dot"></i> ${restInfo.restaurant_address}</p>
        <p class="card-text"><i class="fa-solid fa-phone"></i> ${restInfo.restaurant_phone}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>`;
}
if(mass){
  submitButton.innerHTML = `<a href="/html/review_submit.html?rest=${mass}"><input type="submit" value="New Review Submit" class="m-1"/></a>`
}

  let reviewRoute = "/review?"+restId
    const dataResReviews = await fetch(reviewRoute);
    const resReviews = await dataResReviews.json();
    const reviews = resReviews.reviewData;

  
    for (const review of reviews) {
      const photoPath = review.image_upload.startsWith("https://")
        ? review.image_upload
        : `/uploads/${review.image_upload}`;
        console.log(review.restaurant_id)
      reviewContainer.innerHTML += `
      <div class="reviewCard card">
        <div class="row">
          <div class="col-md-2 col-sm-12">
          <div class="text-center">
            <div class="midUsername">${review.user_name}</div>
            <div><img src="/usericon/${
              review.user_profile_image
            }" class="card-img-bottom circleImg"></div>
          </div>
        </div>
        <div class="col-md-10 col-sm-12">
          <h5 class="title">${review.title}</h5>
          <div>${review.restaurants_name}</div>
          <p class="content">${review.review_content}</p>
          <img src="${photoPath}" class="card-img-bottom imgHeight">
          <small class="text-body-secondary">Posted at ${dateFns.format(
            review.date_of_review,
            "MM/DD/YYYY"
          )}  ${review.time_of_review.substring(0, 5)}</small></p>
        </div>
      </div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

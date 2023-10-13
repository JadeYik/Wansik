window.onload = () => {
  async function fakeLogin() {
    await fetch("/login-dev", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
  }
  const page = new URLSearchParams(location.search).get("p");
  const quantityPage = new URLSearchParams(location.search).get("q");
  const pageDetail = { page: page, quantityPage: quantityPage };

  fakeLogin();
  contentInfo(pageDetail);
};
/*TODO
1. GET AMOUNT OF REVIEW FROM SERVER (ROUTE: /reviewDisplay/ )
2. COUNT HOW MAY I NEED BY THE (1.) result
3. for-loop (gen page btn to somewhere (e.g doc.qurSlt('#id')) and assign click event)
4. 
*/
//This is for Page change
async function contentInfo(pn) {
  const reviewsPage = await fetch(`/reviewTotal/q/${pn.quantityPage}/p/${pn.page}`);
  const resPageReviews = await reviewsPage.json();
  const pageNumber = +resPageReviews.reviewNumbers + 1;

  const reviewContainer = document.querySelector(".review-container");
  const pageContainer = document.querySelector(".page-container");
  const pageNum = document.querySelector("#nuSelect");
 console.log(pageNum.value)
   

 
  for (let i = 1; i < pageNumber; i++) {
    pageContainer.innerHTML += `<a href="http://localhost:8080/html/review.html?q=${pageNum.value}&p=${i}"><button type="button" id="page${i}" class="btn btn-warning m-1 page${i}">${i}</button></a>`;

  }
  // for (let i = 1; i < pageNumber; i++) {
  //   document.querySelector(`#page${i}`).addEventListener("click", async function () {

  //   });
  // }
  const dataResReviews = await fetch(`/reviewDisplay/q/${pn.quantityPage}/p/${pn.page}`);
  const resReviews = await dataResReviews.json();
  const reviews = resReviews.reviewData;
  for (const review of reviews) {
    let x = "";
    if (review.image_upload == null) {
      x = `
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
            <small class="text-body-secondary">Posted at ${dateFns.format(
              review.date_of_review,
              "MM/DD/YYYY"
            )}  ${review.time_of_review.substring(0, 5)}</small></p>
          </div>
        </div>`;
    } else {
      x = `
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
            <img src="/uploads/${review.image_upload}" class="card-img-bottom imgHeight">
            <small class="text-body-secondary">Posted at ${dateFns.format(
              review.date_of_review,
              "MM/DD/YYYY"
            )}  ${review.time_of_review.substring(0, 5)}</small></p>
          </div>
        </div>`;
    }
    reviewContainer.innerHTML += x;

  }

}

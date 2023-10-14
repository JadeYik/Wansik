window.onload = () => {

  const page = new URLSearchParams(location.search).get("p");
  const quantityPage = 1//new URLSearchParams(location.search).get("q");
  const restDataInt = 1//new URLSearchParams(location.search).get("rest");
  const restData = "All"//(restDataInt).toString()
  const pageDetail = { page: page, quantityPage: quantityPage, rest:restData };
  userInfo()
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
  userInfoShow.innerHTML = `<div><img src="/usericon/${userInfo.profile_image}" class="card-img-bottom circleImg fa-user fa-3x"></div><div class="user-name">${userInfo.name}</i></div>`;
}

async function contentInfo(pn) {
  try {
    function paint(i) {
      let x = "";
      if (i.image_upload === null) {
        x = `
        <div class="card reviewCard" style="width: 17rem;">
        <div class="card-body">
          <h5 class="card-title">${i.title}</h5>
          <p class="card-text">${i.restaurants_name}</p>
          <input type="submit" value="Detail"/>
        </div>
        </div>`;
      } else {
        x = `
        <div class="card reviewCard" style="width: 17rem;">
        <img src="/uploads/${i.image_upload}" class="card-img-top" style="height: 10rem;";alt="...">
        <div class="card-body">
        <h5 class="card-title">${i.title}</h5>
        <p class="card-text">${i.restaurants_name}</p>
        <input type="submit" value="Detail"/>
        </div>
     
        </div>
        `;
      }
      return x;
    }
  const reviewContainer = document.querySelector(".contentGroup");
  const dataResReviews = await fetch(`/reviewDisplay/rest/${pn.rest}/q/${pn.quantityPage}/p/${pn.page}`);
  const resReviews = await dataResReviews.json();
  const reviews = resReviews.reviewData;

 console.log(resReviews)
  let x = "";
 
  for (const review of reviews) {
      x = paint(review)
      reviewContainer.innerHTML += x;
    }

  }
  catch (error) {
    console.error(error);
  }


 
}


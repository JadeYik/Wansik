window.onload = ()=>{
    contentInfo();
}

async function contentInfo(){
    const dataResReviews = await fetch("/reviewDisplay")
    const resReviews = await dataResReviews.json()
  
    console.log(resReviews.rowsDataValue)
    const reviews = resReviews.reviewData
    const reviewContainer = document.querySelector(".review-container")

    for(const review of reviews){


        reviewContainer.innerHTML +=`                    
        <div class="reviewCard card">
          <div class="row">
            <div class="col-md-2 col-sm-12">
            <div class="text-center">
              <div class="midUsername">${review.user_name}</div>
              <div><img src="/userPic/${review.user_profile_image}" class="card-img-bottom circleImg"></div>
            </div>
          </div>
          <div class="col-md-10 col-sm-12">
            <h5 class="title">${review.title}</h5>
            <div>${review.restaurants_name}</div>
            <p class="content">${review.review_content}</p>
            <img src="/uploads/${review.image_upload}" class="card-img-bottom imgHeight">
            <small class="text-body-secondary">Posted at ${dateFns.format((review.date_of_review), "MM/DD/YYYY")}  ${(review.time_of_review).substring(0,5)}</small></p>
          </div>
        </div>`

      
    }

}

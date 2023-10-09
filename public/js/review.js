window.onload = ()=>{
    contentInfo();
}

async function contentInfo(){
    const resp = await fetch("/reviewDisplay")
    const resqReviews = await resp.json()
    const reviews = resqReviews.data.rows
    const reviewContainer = document.querySelector(".review-container")
    console.log (reviews)
    for(const review of reviews){
        reviewContainer.innerHTML +=`                    
        <div class="review card">
        <div class="card-body">
          <h5 class="title">${review.title}</h5>
          <p class="content">${review.review_content}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
        <img src="/uploads/${review.image_upload}" class="card-img-bottom" alt="...">
      </div>`
    }

}


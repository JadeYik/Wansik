window.onload = ()=>{
    async function fakeLogin(){
      await fetch('/login-dev',{method:"POST",
      header:{'Content-Type':'application/json'},
      body:JSON.stringify()
      
    })
    console.log("hihi")}
    contentInfo();
}
/*TODO
1. GET AMOUNT OF REVIEW FROM SERVER (ROUTE: /reviewDisplay/ )
2. COUNT HOW MAY I NEED BY THE (1.) result
3. for-loop (gen page btn to somewhere (e.g doc.qurSlt('#id')) and assign click event)
4. 
*/
//This is for Page change
async function contentInfo(){
    const dataResReviews = await fetch("/reviewDisplay")
    const resReviews = await dataResReviews.json()
    const pageNumber = +(resReviews.reviewNumbers)

    const reviewContainer = document.querySelector(".review-container")
    const pageContainer = document.querySelector(".page-container")
    let i = pageNumber+1
  for (let i = 1; i < 5;i++){
      pageContainer.innerHTML +=`<button type="button" id="page${i}" class="btn btn-warning m-1 page${i}">${i}</button>`
  }
  for (let i = 1; i < 5;i++){
     document.querySelector(`#page${i}`).addEventListener("click",
     async function (){
     let fromObject = {page:`${i}`}
     console.log(fromObject)
      const dataR = await fetch('/reviewDisplay',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fromObject)}
    )}) 
}
const res = await fetch("/reviewDisplay")
  // if (res.ok){
    const reviews = resReviews.reviewData
  //   console.log(reviews[0])
    for(const review of reviews){
        reviewContainer.innerHTML +=`
        <div class="reviewCard card">
          <div class="row">
            <div class="col-md-2 col-sm-12">
            <div class="text-center">
              <div class="midUsername">${review.user_name}</div>
              <div><img src="/usericon/${review.user_profile_image}" class="card-img-bottom circleImg"></div>
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
    // }
  }

}

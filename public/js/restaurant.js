let restaurantList;

window.onload = async () => {
  restaurantList = document.querySelector("#restaurant-list");

  getrestaurantData();
};

async function getrestaurantData() {
  const resp = await fetch("/restaurant");
  const restaurantDataList = await resp.json();

  const restaurantData = restaurantDataList.restaurantReq;
  console.log(restaurantData);
  console.log(restaurantData.restaurant_name);

  for (const newRestList of restaurantData) {
    console.log(newRestList.restaurant_name);

    restaurantList.innerHTML += `<div class="card mb-3 restaurant-card" >
        <div class="row g-0">
          <div class="col-md-4 rest-image">
            <img src="${newRestList.restaurant_image}" class="img-fluid rounded-start restaurant-image" alt="restaurant image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> ${newRestList.restaurant_name}</h5>
              <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${newRestList.district}</p>
              <p class="card-text"><i class="fa-solid fa-map-location-dot"></i> ${newRestList.restaurant_address}</p>
              <p class="card-text"><i class="fa-solid fa-phone"></i> ${newRestList.restaurant_phone}</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

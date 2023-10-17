window.onload =    async() => {
  async function fakeLogin() {
  }
  fakeLogin()
  const restName = new URLSearchParams(location.search);
  const restNameData = restName.get("rest");
  restPic(restNameData)
  contentForm(restNameData);
};
async function restPic(mass){
  const restN = document.querySelector("#restaurantName");
  
  const dataRestInfo = await fetch(`/oneRestaurant?rest=${mass}`);

  const restInfo = (await dataRestInfo.json());
  restN.innerHTML =`<div>${restInfo.name}</div>`
  const restPic = document.querySelector("#restIcon")
 restPic.innerHTML =`<img src="${restInfo.photo}" id="restPic" class="circleImg"></img>`

}


function contentForm(restName) {
  document.querySelector("#reviewFrom").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("title", form.title.value);
    formData.append("content", form.content.value);
    formData.append("image", form.image.files[0]);
    const res = await fetch(`/reviewSubmit?rest=${restName}`, {
      method: "POST",
      body: formData,
    });
  });
  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
}


//Hello ben, we know what u did last summer!
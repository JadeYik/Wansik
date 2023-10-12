window.onload = async () => {
  await fetch("/login-dev", { method: "POST" });
  const restName = new URLSearchParams(location.search);
  const restNameData = restName.get("rest");
  restPic(restNameData)
  contentForm(restNameData);
};
async function restPic(i){
  const restN = document.querySelector("#restaurantName");
  restN.innerHTML = i;

  const res = await fetch(`/restPic?rest=${i}`);
  const resData = await res.json()

  const restPic = document.querySelector("#restPic")

  restPic.src = `/restPic/${resData.restaurant_image}`

}


function contentForm(restName) {
  document.querySelector("#reviewFrom").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("userName", form.userName.value);
    formData.append("title", form.title.value);
    formData.append("content", form.content.value);
    formData.append("image", form.image.files[0]);
    const res = await fetch(`/reviewSubmit?rest=${restName}`, {
      method: "POST",
      body: formData,
    });
  });
}

window.onload = async() => {

    await fetch("/login-dev", { method: "POST" });
    const restName = new URLSearchParams(location.search);
    const restNameData = restName.get("rest");
    console.log(restNameData)
  contentForm(restNameData);
  
};
document.querySelector("#reviewFrom") = 
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

// window.onload = () => {
//     getUserInfo() 
//     login()
// }
async function getUserInfo() {
    // const res = await fetch("/userInfo")
    // if (res.ok) {
    //   const data = await res.json()
    //   document.querySelector("#username-label").innerHTML = data.email
    // } else {
    //   // Handle Error?
    //   document.querySelector("#username-label").innerHTML = "admin"
    //   // alert("Error when fetch user info!");
    // }
  }
async function login() {
    document.querySelector("#login-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email)
      const res = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-type": "application/json"
        }
      });
      console.log(res);
      // form.reset();
  
      let json = await res.json();
      console.log(json)
      if (json.success) {
        // loadMemos() or updateMemo()
        location.replace("/html/home.html");
      } else {
        // Handle Error?
        alert("Error when Login!");
      }
    }
    );
}
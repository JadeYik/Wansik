// window.onload = () => {
//     getUserInfo()
//     login()
// }
// async function getUserInfo() {
//   // const res = await fetch("/userInfo")
//   // if (res.ok) {
//   //   const data = await res.json()
//   //   document.querySelector("#username-label").innerHTML = data.email
//   // } else {
//   //   // Handle Error?
//   //   document.querySelector("#username-label").innerHTML = "admin"
//   //   // alert("Error when fetch user info!");
//   // }
// }
// async function login() {
//   document.querySelector("#login-form").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email);
//     const res = await fetch("/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//     console.log(res);
//     // form.reset();

//     let json = await res.json();
//     console.log(json);
//     if (json.success) {

//       // loadMemos() or updateMemo()
//       // location.replace("/html/home.html");

//     } else {
//       // Handle Error?
//       alert("Error when Login!");
 
//     }
//   });
// }


// let loginButton = document.querySelector(".login-button");
// let userDataHidden = document.querySelector(".hidden");
// let isLoggedIn = false;

// // window.onload = async () => {
// //   await login(); // Call your login function to update the isLoggedIn variable
// //   toggleLoginState();
// // };

// function toggleLoginState() {
//   if (isLoggedIn) {
//     loginButton.classList.add("hidden");
//     userDataHidden.classList.remove("hidden");
//   } else {
//     loginButton.classList.remove("hidden");
//     userDataHidden.classList.add("hidden");
//   }
// }

// async function login() {
//   document.querySelector("#login-form").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     const res = await fetch("/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });

//     let json = await res.json();

//     if (json.success) {
//       isLoggedIn = true;
//       toggleLoginState();
//       document.querySelector(".close-btn").click(); // Trigger click event on the element
//       // Do any other necessary actions upon successful login
//     } else {
//       // Handle Error?
//       alert("Error when Login!");
//       isLoggedIn = false;
//       toggleLoginState();
//     }
//   });
// }

async function login() {
  console.log("login")
  document.querySelector("#login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    let json = await res.json();

    if (json.success) {
      // Do any additional actions for a successful login on the same page
      alert("Login successful!");
      // Reset the form if needed
      form.reset();
      document.querySelector(".close-btn").click();

      location.reload();
    } else {
      // Handle Error?
      alert("Error when Login!");
    }
  });
}
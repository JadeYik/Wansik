// import express from "express";
// import { User } from "./models";
// import { client } from "./db";


// export const authRoutes = express.Router();

// authRoutes.get("/userInfo", async (req, res) => {
//   if (!req.session.user ) {
//     res.status(401).json({ success: false });
//     return
//   }
//   res.json({ success: true, username: req.session.email?.email});
// });


// authRoutes.post("/login", async (req, res) => {
//   const { email, password } = req.body  ;
//   console.log(email)
//   if (!email|| !password) {
//     console.log(email)
//     res.status(400).json({ success: false, message: "missing username or password" });
//     return;
//   }

//   const result = await client.query("Select * from users where email = $1 and password = $2", [email, password])
//   if (result.rowCount == 0) {
//     res.status(400).json({ success: false, message: "invalid email or password" });
//     return
//   }
//   console.log(email)
//   req.session.email = { email: result.rows[0].email};
//   res.json({ success: true, message: "success"});
// });

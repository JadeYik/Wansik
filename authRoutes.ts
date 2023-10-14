import express from "express";
import { User } from "/models";
import { client } from "/db";


export const authRoutes = express.Router();

authRoutes.get("/userInfo", async (req, res) => {
  if (!req.session.user ) {
    res.status(401).json({ success: false });
    return
  }
  res.json({ success: true, username: req.session.user?.username});
});


authRoutes.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ success: false, message: "missing username or password" });
    return;
  }

  const result = await client.query("Select * from users where username = $1 and password = $2", [username, password])
  if (result.rowCount == 0) {
    res.status(400).json({ success: false, message: "invalid username or password" });
    return
  }
  req.session.user = { username: result.rows[0].username, userId: result.rows[0].id};
  res.json({ success: true, message: "success"});
});

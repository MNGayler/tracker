import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // CHECK EXISTING ADMIN
  const q = "SELECT * FROM admin WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    // if data is found username is in use return 409 error.
    if (data.length) return res.status(409).json("User already exists!");
    // Hash the password and create user in the database
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO admin(`username`, `password`) VALUES (?) ";
    const VALUES = [req.body.username, hash];

    db.query(q, [VALUES], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Admin user created");
    });
  });
};

export const login = (req, res) => {
  //Check user exists
  const q = "SELECT * FROM admin WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    // no length, user not found
    if (data.length === 0)
      return res.status(401).json("Invalid username or password!");
    //user exists check password - data[0] is the first(only) admin
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(401).json("Invalid username or password!");

    //Login admin

    const token = jwt.sign({ id: [data.id] }, "jwtkey");
    // prevent hased password from being sent 
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};

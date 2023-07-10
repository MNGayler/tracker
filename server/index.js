import express from "express";
import authRoutes from "./routes/auth.js"
import adminRoutes from "./routes/admin.js"
import foodRoutes from "./routes/food.js"

const app = express();
app.use(express.json());

app.use("/server/food", foodRoutes);
app.use("/server/admin", adminRoutes);
app.use("/server/auth", authRoutes);



app.listen(3001, () => {
  console.log("server running on port: 3001");
});

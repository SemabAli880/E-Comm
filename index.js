const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute=require('./routes/auth')

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log(`Mongo DB Connection is successful`);
  })
  .catch((err) => {
    console.log(err);
  });

//All API Route Goes here
app.use(express.json());
app.use('/api/auth',authRoute);



app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

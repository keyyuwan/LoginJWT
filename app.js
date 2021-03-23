require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Mongo Connected");
    }
  }
);

// express.json() vai pegar tudo que vier da requisição em json e colocar dentro do nosso body
app.use("/user", express.json(), userRouter);

app.use("/admin", express.json(), adminRouter)

app.listen(process.env.PORT, () => console.log("Server running"));

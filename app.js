const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./routes/user");
const book = require("./routes/book");
const cart = require("./routes/cart");
const fav = require("./routes/favourite");
const order = require("./routes/order");
require("dotenv").config();

const PORT = process.env.PORT || 1000;
app.use(cors());
app.use(express.json());

//Connection
require("./conn/conn");

//Calling Routes
app.use("/api/v1", user);
app.use("/api/v1", book);
app.use("/api/v1", cart);
app.use("/api/v1", fav);
app.use("/api/v1", order);

const corsOptions = {
  origin: 'https://animabookshelf.netlify.app', // Replace with your allowed origin
  methods: ['GET', 'POST'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

app.use(cors(corsOptions));

//SERVER
app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT} `);
});
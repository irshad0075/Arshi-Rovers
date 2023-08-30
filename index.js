const express = require("express");
const app = express();
require("dotenv").config();

const Categoryrouter = require("./API/category/router");
const UserRouter = require("./API/user/router");
const Brandrouter = require("./API/Brands/router");
const Productrouter = require("./API/Products/router");
const Orderrouter = require("./API/orders/router");

const path = require ('path')
const cors = require("cors");

const clientPath = path.join(__dirname,'./dist')
app.use('/', express.static(clientPath))

const port = process.env.SERVER_PORT || 3030;

app.use(express.json());

app.use(cors());

app.use("/api", Categoryrouter);
app.use("/api", UserRouter);
app.use("/api", Productrouter);
app.use("/api", Brandrouter);
app.use("/api", Orderrouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

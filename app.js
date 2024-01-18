const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.port || 3000;
const imageRouter = require("./routes/image")

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  
  console.log(`Server running on port ${port}`);
});
app.use(express.json())
app.use("/image",imageRouter)
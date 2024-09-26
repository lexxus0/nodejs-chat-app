const express = require("express");
const cors = require("cors");
const axios = require("axios");
const env = require("./env.js");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const instanse = axios.create({
  baseURL: "https://api.chatengine.io/",
});

const privateKey = env.env("PRIVATE_KEY");
console.log(privateKey);
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const res = await instanse.put(
      "users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-key": privateKey } }
    );
    return res.status(res.status).json(res.data);
  } catch (e) {
    return res.status(e.status).json(e.response.data);
  }
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

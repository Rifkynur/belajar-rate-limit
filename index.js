const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, //jumlah waktu maksimal jika sudah menyentuk batas max
  max: 5, //jumlah maksimal request
  message: "Terlalu banyak mencoba",
});

app.use(limiter);

app.get("/api/v1", (req, res) => {
  res.json({
    data: "data 1",
  });
});
app.listen(5000, () => {
  console.log("port listen in port 5000");
});

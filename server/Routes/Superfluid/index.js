const router = require("express").Router();
const { Framework } = require("@superfluid-finance/sdk-core");

const address = "0x56Db34Ae6c025506DC42d116916cDCf18769330b";
const api = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

const provider = new ethers.providers.JsonRpcProvider(api);
async function balance(user, coin) {
  try {
    const sf = await Framework.create({
      chainId: 80001,
      provider,
    });

    const usdcx = await sf.loadSuperToken(coin);
    const token = await usdcx.balanceOf({
      account: user,
      providerOrSigner: provider,
    });
    return Number(token);
  } catch (err) {
    console.log(err);
  }
}
router.post("/balacne", async (req, res) => {
  const { user, coin } = req.body;
  try {
    await balance(user, coin).then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// const { ethers, JsonRpcApiProvider } = require("ethers");
// require("dotenv").config();
//

// const express = require("express");

// const app = express();
// const cors = require("cors");
// app.use(cors());
// const http = require("http");
// const { Server } = require("socket.io");

// const server = http.createServer(app);

// // email sending

// const nodemailer = require("nodemailer");
// const smtpTransport = require("nodemailer-smtp-transport");

// const EMAIL = process.env.EMAIL;
// const PASSWORD = process.env.PASSWORD;

// const sendEmail = async (email, subject, text) => {
//   console.log(EMAIL, PASSWORD);
//   let transporter = nodemailer.createTransport(
//     smtpTransport({
//       host: "smtpout.secureserver.net",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//       },
//     })
//   );
//   let mailOptions = {
//     from: process.env.EMAIL,
//     to: email,
//     subject: "Pro Youth Verification",
//     html: `<p>Your OTP verification number for Proyouth is:</p>`,
//   };
//   transporter.sendMail(mailOptions, async (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("mail sent");
//     }
//   });
// };

// //////////////////////////// this is the api which help us to connect to the blockchain ////////////////////////////

// const address = "0x56Db34Ae6c025506DC42d116916cDCf18769330b";
// const api = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

// const provider = new ethers.providers.JsonRpcProvider(api);
// async function balance(user, coin) {
//   try {
//     const sf = await Framework.create({
//       chainId: 80001,
//       provider,
//     });

//     const usdcx = await sf.loadSuperToken(coin);
//     const token = await usdcx.balanceOf({
//       account: user,
//       providerOrSigner: provider,
//     });
//     return Number(token);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// server.listen(4000, () => {
//   console.log("listening on port 4000");
// });

// io.on("connection", (socket) => {
//   socket.on("message", async (data) => {
//     console.log(data);
//     let value = await balance(data.user);
//     console.log(value);
//     while (value > data.threshold) {
//       value = await balance(data.user, data.coin);
//       console.log(value);
//       console.log(1);
//     }
//     sendEmail(data.email, "Pro Youth Verification", "Your OTP is: 123456");
//     console.log("done");
//     console.log(typeof value);
//     // socket.broadcast.emit("receive_message", data.message);
//   });
// });

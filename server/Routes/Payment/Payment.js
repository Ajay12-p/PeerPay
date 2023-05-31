const router = require("express").Router();
const Payment = require("../../Models/Payment");

router.post("/Pay", async (req, res) => {
  console.log(req.body);
  try {
    const {
      Buyer,
      seller,
      flowrate,
      start,
      end,
      Product,
      Amount,
      image,
      coin,
    } = req.body;

    const newPayment = await Payment.create({
      Buyer,
      seller,
      flowrate,
      start,
      end,
      image,
      Product,
      coin,
      Amount,
      Active: true,
    });
    console.log(newPayment);
    res.status(200).json(newPayment);
  } catch (err) {
    console.log(err);
  }
});

router.post("/userinfo", async (req, res) => {
  try {
    const { user } = req.body;
    console.log(user);

    const PaymentDetail = await Payment.find({
      Buyer: user,
    });

    console.log(PaymentDetail);
    res.status(200).json(PaymentDetail);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});

router.get("/bussinesspayment", async (req, res) => {
  console.log(req.body);
  try {
    const { Seller } = req.body;

    const PaymentDetail = await Payment.findOne({
      seller: Seller,
    });

    console.log(PaymentDetail);
    res.status(200).json(PaymentDetail);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});
router.get("/product", async (req, res) => {
  console.log(req.body);
  try {
    const { Product } = req.body;

    const PaymentDetail = await Payment.findOne({
      Product: Product,
    });

    console.log(PaymentDetail);
    res.status(200).json(PaymentDetail);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});

router.get("/byid", async (req, res) => {
  const { id } = req.body;
  try {
    const product = await Payment.findById(id);

    console.log(product);
    res.status(200).json(product);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});

router.put("/inactive", async (req, res) => {
  const { id } = req.body;
  try {
    const product = await Payment.findByIdAndUpdate(
      id,
      { Active: false },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

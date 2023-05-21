const router = require("express").Router();
const Bussiness = require("../../Models/Bussiness");

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const { AccountAdress, BussinessName } = req.body;
    console.log(AccountAdress, BussinessName);
    const newBussiness = await Bussiness.create({
      AccountAdress,
      BussinessName,
    });
    console.log(newBussiness);
    res.status(200).json(newBussiness);
    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getOwner", async (req, res) => {
  console.log(req.body);
  try {
    const { AccountAdress } = req.body;

    const BussinessDetail = await Bussiness.findOne({
      AccountAdress: AccountAdress,
    });
    // console.log(AccountAdress, BussinessName);
    // const newBussiness = await Bussiness.create({
    //   AccountAdress,
    //   BussinessName,
    // });
    console.log(BussinessDetail);
    res.status(200).json(BussinessDetail);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;

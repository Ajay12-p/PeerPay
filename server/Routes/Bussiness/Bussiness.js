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

router.get("/getOwner/:id", async (req, res) => {
  console.log(req.params);
  function makeAllLettersBig(string) {
    return string.toUpperCase();
  }
  try {
    const { id } = req.params;
    console.log(makeAllLettersBig(id));

    const BussinessDetail = await Bussiness.find({
      AccountAdress: id,
    });

    console.log(BussinessDetail);
    res.status(200).json(BussinessDetail);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});

router.post("/get", async (req, res) => {
  try {
    const { api } = req.body;
    console.log(api);
    const BussinessDetail = await Bussiness.find({
      _id: api,
    });

    console.log(BussinessDetail);
    res.status(200).json(BussinessDetail);

    // res.json("Bussiness has been registered", newBussiness);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;

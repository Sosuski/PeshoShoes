const products = require("../schemas/products.schema");

const Post = async (req, res) => {
  let data = req.body.input;
  "data is " + data;
  if (data) {
    let results = await products.find({
      title: {
        $regex: `^${data}`,
        $options: "i",
      },
    });
    res.json(results);
  }
};

module.exports = {
  Post,
};

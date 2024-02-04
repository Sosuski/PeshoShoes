const products = require("../schemas/products.schema");
const multer = require("multer");
const path = require("path");

const Post = async (req, res) => {
  // console.log('aaaaaaaaaaaaaaaa')
  // console.log("there", req.body.data);
  console.log("file", req.file);
  const product = new products({
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename,
    price: req.body.price,
  });
  await product.save();

  res.json({ message: "success" });
};

const Get = async (req, res) => {
  let doc2 = [];
  const doc = await products.find({});
  for (let i = 0; i < doc.length; i++) {
    doc2.push({
      title: doc[i].title,
      description: doc[i].description,
      image: doc[i].image,
      price: doc[i].price,
    });
  }
  res.json({ products: doc2 });
};

module.exports = {
    Post,
    Get
};
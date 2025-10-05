const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    foodType: { type: String, enum: ["veg", "non-veg"], default: "veg" },
    category: { type: String },
    offers: { type: String },
    image: { type: String }
}, { timestamps: true });           
const Product = mongoose.model('Product', productSchema);
module.exports = Product;

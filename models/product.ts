const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
    unique: true
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  avaible: {
    type: Boolean,
    defult: true
  }
});

ProductSchema.methods.toJSON = function () {
  const { __v, estado, ...data } = this.toObject();
  return data;
};

export default model('Product', ProductSchema);

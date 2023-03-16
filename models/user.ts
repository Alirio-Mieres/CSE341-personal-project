const { Schema, model } = require('mongoose');

const ContactSchema = Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  birthday: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  }
});

export default model('User', ContactSchema);

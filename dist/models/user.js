"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    birthday: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
});
exports.default = model('User', ContactSchema);
//# sourceMappingURL=user.js.map
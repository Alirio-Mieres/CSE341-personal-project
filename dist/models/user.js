"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const UserSchema = Schema({
    firstName: {
        type: String,
        required: [true, 'Fierst Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
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
UserSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id, password } = _a, user = __rest(_a, ["__v", "_id", "password"]);
    user.uid = _id;
    return user;
};
exports.default = model('User', UserSchema);
//# sourceMappingURL=user.js.map
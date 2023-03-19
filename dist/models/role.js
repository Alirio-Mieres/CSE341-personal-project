"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'Role is required']
    }
});
exports.default = model('Role', RoleSchema);
//# sourceMappingURL=role.js.map
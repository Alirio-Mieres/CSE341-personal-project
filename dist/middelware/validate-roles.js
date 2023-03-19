"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = exports.isAdminRole = void 0;
const isAdminRole = (req, res, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Need valid role'
        });
    }
    const { role, firstName } = req.user;
    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${firstName} is not admin`
        });
    }
    next();
};
exports.isAdminRole = isAdminRole;
const hasRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(500).json({
                msg: 'Need valid role'
            });
        }
        console.log(req.user);
        if (!roles.includes(req.user.role)) {
            return res.status(401).json({
                msg: `The service need one of this roles: ${roles}`
            });
        }
        next();
    };
};
exports.hasRole = hasRole;
//# sourceMappingURL=validate-roles.js.map
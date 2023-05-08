"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressValidate = void 0;
const express_validator_1 = require("express-validator");
function expressValidate(req, res, next) {
    const result = (0, express_validator_1.validationResult)(req);
    // console.log("Results" , result)
    // console.log()
    if (!result.isEmpty()) {
        return res.status(400).json({ msg: 'Incorrect input values', errors: result.array() });
    }
    next();
}
exports.expressValidate = expressValidate;

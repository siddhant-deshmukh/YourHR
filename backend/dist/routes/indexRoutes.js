"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const userControllers_1 = require("../controllers/userControllers");
const auth_1 = __importDefault(require("../middlewares/auth"));
const validator_1 = require("../middlewares/validator");
const router = express_1.default.Router();
router.get('/', auth_1.default, function (req, res) {
    return res.json({ user: res.user });
});
router.post('/login', (0, express_validator_1.body)('email').isEmail().isLength({ max: 30, min: 3 }).toLowerCase().trim(), (0, express_validator_1.body)('password').isString().isLength({ max: 20, min: 5 }).trim(), validator_1.expressValidate, userControllers_1.loginUser);
router.post('/register', (0, express_validator_1.body)('email').isEmail().isLength({ max: 30, min: 3 }).toLowerCase().trim(), (0, express_validator_1.body)('password').isString().isLength({ max: 20, min: 5 }).trim(), (0, express_validator_1.body)('name').isString().isLength({ max: 20, min: 1 }).trim(), validator_1.expressValidate, userControllers_1.registerUser);
router.get('/logout', function (req, res) {
    res.clearCookie("access_token");
    return res.status(200).json({});
});
router.get('/send-verify/:emailId', userControllers_1.sendEmailVerificationLink);
router.get('/verify/:token', userControllers_1.sendEmailVerificationLink);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, maxLength: 50, minlength: 3 },
    email: { type: String, unique: true, maxLength: 50, minlength: 3 },
    password: { type: String, maxLength: 100, minlength: 5 },
    auth_type: [{ type: String, required: true, enum: ['google', 'github', 'password'] }],
    emailVerfied: { type: Boolean, default: false },
    about: { type: String, default: '', maxLength: 250 },
    skills: [{ type: String }],
    haveUploaded: { type: Number, default: 0 },
    haveSeen: { type: Number, default: 0 }
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;

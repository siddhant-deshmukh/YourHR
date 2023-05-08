"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailVerificationLink = exports.registerUser = exports.loginUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const IN_PRODUCTION = (process.env.IN_PRODUCTION) ? true : false;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const checkUser = yield users_1.default.findOne({ email });
            if (!checkUser)
                return res.status(404).json({ msg: 'Email doesn`t exists!' });
            if (!checkUser.password)
                return res.status(403).json({ msg: 'Try another method' });
            if (!(yield bcryptjs_1.default.compare(password, checkUser.password)))
                return res.status(406).json({ msg: 'Wrong password!' });
            // console.log(process.env.TOKEN_KEY)
            const token = jsonwebtoken_1.default.sign({ _id: checkUser._id.toString(), email }, process.env.TOKEN_KEY || 'KuchBhi', { expiresIn: '5h' });
            res.cookie("access_token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 5,
                sameSite: 'none',
                secure: true,
                // domain: process.env.DOMAIN || 'http://localhost:5000',
            });
            const user = {
                _id: checkUser._id,
                email: checkUser.email,
                emailVerfied: checkUser.emailVerfied,
                about: checkUser.about,
                name: checkUser.name,
                skills: checkUser.skills
            };
            return res.status(200).json({ user });
        }
        catch (err) {
            res.status(500).json({ msg: 'Some internal error occured', err });
        }
    });
}
exports.loginUser = loginUser;
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password, name } = req.body;
            const checkEmail = yield users_1.default.findOne({ email });
            if (checkEmail)
                return res.status(409).json({ msg: 'User already exists!' });
            const encryptedPassword = yield bcryptjs_1.default.hash(password, 15);
            const newUser = yield users_1.default.create({
                email,
                name,
                password: encryptedPassword,
            });
            const token = jsonwebtoken_1.default.sign({ _id: newUser._id.toString(), email }, process.env.TOKEN_KEY || 'KuchBhi', { expiresIn: '2h' });
            // res.setHeader('Set-Cookie', )
            res.cookie("access_token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 5,
                sameSite: (IN_PRODUCTION) ? 'none' : 'lax',
                secure: (IN_PRODUCTION) ? true : false,
                // domain: process.env.DOMAIN || 'http://localhost:5000'
            });
            const user = {
                _id: newUser._id,
                email: newUser.email,
                emailVerfied: newUser.emailVerfied,
                about: newUser.about,
                name: newUser.name,
                skills: newUser.skills
            };
            return res.status(201).json({ user });
        }
        catch (err) {
            res.status(500).json({ msg: 'Some internal error occured', err });
        }
    });
}
exports.registerUser = registerUser;
function sendEmailVerificationLink(req, res) {
    try {
        res.status(200).json({ msg: 'Check your email' });
    }
    catch (err) {
        res.status(500).json({ msg: 'Some internal error occured', err });
    }
}
exports.sendEmailVerificationLink = sendEmailVerificationLink;

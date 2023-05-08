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
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const auth_1 = __importDefault(require("../middlewares/auth"));
const validator_1 = require("../middlewares/validator");
const users_1 = __importDefault(require("../models/users"));
const dotenv_1 = __importDefault(require("dotenv"));
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_presigned_post_1 = require("@aws-sdk/s3-presigned-post");
dotenv_1.default.config();
const router = express_1.default.Router();
router.get('/', auth_1.default, function (req, res) {
    if (res.user) {
        return res.status(200).json({ user: res.user });
    }
    res.status(500).json({ msg: 'Some error occured' });
});
router.put('/', (0, express_validator_1.body)('name').optional().isString().isLength({ max: 50, min: 3 }).trim(), (0, express_validator_1.body)('about').optional().isString().isLength({ max: 50, min: 0 }).trim(), (0, express_validator_1.body)('skills').optional().isArray({ max: 50 }).isLength({ max: 50, min: 1 })
    .custom((options) => {
    let b = true;
    options.forEach((option) => {
        if (typeof option !== 'string' || option.length < 1 || option.length > 25) {
            b = false;
            return false;
        }
    });
    return b;
}), validator_1.expressValidate, auth_1.default, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!res.user) {
                throw 'no user found internal error';
            }
            const { name, about, skills } = req.body;
            yield users_1.default.findByIdAndUpdate(res.user._id, {
                about,
                name,
                skills
            });
            return res.status(201).json({ msg: 'updated' });
        }
        catch (err) {
            res.status(500).json({ msg: 'Some error occured', err });
        }
    });
});
// console.log(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY)
const client = new client_s3_1.S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
router.post('/resume', (0, express_validator_1.body)('Content_Length').isNumeric(), (0, express_validator_1.body)('Content_Type').isIn(['application/pdf', 'application/msword']), validator_1.expressValidate, auth_1.default, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!res.user) {
                throw 'no user found internal error';
            }
            if (res.user.haveUploaded && res.user.haveUploaded > 5)
                return res.status(403).json({ msg: 'Have reached limit! Can not upload resume more than 5 times' });
            const { Content_Type } = req.body;
            const Key = `${res.user._id.toString()}/resume.${(Content_Type === 'application/pdf') ? 'pdf' : 'doc'}`;
            console.log(Key);
            const Conditions = [
                ["starts-with", "$key", Key],
                ["content-length-range", 1, 1024 * 1024],
            ];
            const { url, fields } = yield (0, s3_presigned_post_1.createPresignedPost)(client, {
                Bucket: 'yourhr',
                Key,
                Conditions,
                Expires: 3600,
            });
            yield users_1.default.findByIdAndUpdate(res.user._id, {
                haveSeen: (res.user.haveSeen || 0) + 1
            });
            return res.status(200).json({ url, fields });
        }
        catch (err) {
            res.status(500).json({ msg: 'Some error occured', err });
        }
    });
});
router.get('/resume/:uid', auth_1.default, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!res.user) {
                throw 'no user found internal error';
            }
            if (res.user.haveSeen && res.user.haveSeen > 15)
                return res.status(403).json({ msg: 'Have reached limit! Can not see resume more than 10 times' });
            let userId = req.params.uid;
            if (!userId)
                return res.status(400).json({ msg: 'no user id', userId });
            const user = yield users_1.default.findById(userId);
            if (!user)
                return res.status(404).json({ msg: 'user does not exist' });
            yield users_1.default.findByIdAndUpdate(userId, {
                haveSeen: (res.user.haveSeen || 0) + 1
            });
            const head_command = new client_s3_1.HeadObjectCommand({
                Bucket: 'yourhr',
                Key: `${userId}/resume.pdf`
            });
            try {
                const response = yield client.send(head_command);
                if (!response) {
                    return res.status(404).json({ msg: 'resume does not exist' });
                }
            }
            catch (err) {
                return res.status(404).json({ msg: 'resume Does not exist' });
            }
            const getObjectParams = {
                Bucket: 'yourhr',
                Key: `${res.user._id.toString()}/resume.pdf`,
            };
            const command = new client_s3_1.GetObjectCommand(getObjectParams);
            const url = yield (0, s3_request_presigner_1.getSignedUrl)(client, command, { expiresIn: 3600 });
            return res.status(200).json({ url });
        }
        catch (err) {
            res.status(500).json({ msg: 'Some error occured', err });
        }
    });
});
exports.default = router;

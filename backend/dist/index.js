"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set("trust proxy", 1);
// ['http://localhost:5173/','http://localhost:5174/']
const origin = [];
let url1 = process.env.CLIENT_URL_1;
let url2 = process.env.CLIENT_URL_2;
let url3 = process.env.CLIENT_URL_3;
let url4 = process.env.CLIENT_URL_4;
if (url1)
    origin.push(url1);
if (url2)
    origin.push(url2);
if (url3)
    origin.push(url3);
if (url4)
    origin.push(url4);
// app.use()
app.use((0, cors_1.default)({ origin, credentials: true, optionsSuccessStatus: 200 }));
app.use(express_1.default.urlencoded({ extended: false, limit: '1kb' }));
app.use(express_1.default.json({ limit: '20kb' })); // limit the size of incoming request body and parse i.e convert string json to js object for every incoming request
app.use((0, cookie_parser_1.default)());
// app.use(cookieSession({
//   name: "__session",
//   keys: ["key1"],
//   maxAge: 24 * 60 * 60 * 100,
//   secure: false,
//   httpOnly: true,
//   sameSite: 'none'
// }))
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => { console.log("Connected to database"); })
    .catch((err) => { console.error("Unable to connect database", err); });
app.use('/', indexRoutes_1.default);
app.use('/u', userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

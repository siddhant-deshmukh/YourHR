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
app.use((0, cors_1.default)({ origin: ['http://localhost:5173', 'http://localhost:5174'], credentials: true, optionsSuccessStatus: 200 }));
app.use(express_1.default.urlencoded({ extended: false, limit: '1kb' }));
app.use(express_1.default.json({ limit: '20kb' })); // limit the size of incoming request body and parse i.e convert string json to js object for every incoming request
app.use((0, cookie_parser_1.default)());
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => { console.log("Connected to database"); })
    .catch((err) => { console.error("Unable to connect database", err); });
app.use('/', indexRoutes_1.default);
app.use('/u', userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

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
const logg_1 = require("./logg");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let rd = yield (0, logg_1.gyt)();
    res.send(res.json(rd));
}));
app.get("/:w", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let sb = req.params.w;
    let rd = yield (0, logg_1.gyt)(sb);
    res.send(res.json(rd));
}));
app.get("/r/:w", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let sb = req.params.w;
    let rd = yield (0, logg_1.gyt)(`r/${sb}`);
    res.send(res.json(rd));
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

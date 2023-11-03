"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gyt = void 0;
const TEER = __importStar(require("puppeteer"));
let gyt = (subreddit) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield TEER.launch({
        headless: true
    });
    const page = yield browser.newPage();
    let sbt = "new";
    if (subreddit) {
        sbt = subreddit;
    }
    yield page.goto(`https://old.reddit.com/${sbt}`);
    yield page.setDefaultTimeout(5000);
    yield page.screenshot({
        path: `scrshot.png`
    });
    yield page.waitForSelector("a", {
        visible: true,
    });
    const data = yield page.evaluate(() => {
        const site = document.getElementById("siteTable"); //forem page
        if (site) {
            const tc = site.querySelectorAll(".title may-blank outbound");
            const ddiv = site.querySelectorAll("div");
            ddiv.forEach(div => {
                const likeC = site.querySelectorAll(".midcol.unvoted");
                likeC.forEach(like => {
                    let _upvotes = site.querySelector(".score likes");
                    let upvotes = _upvotes === null || _upvotes === void 0 ? void 0 : _upvotes.textContent;
                });
                const spans = site.querySelectorAll("span");
                spans.forEach(span => {
                    const _rank = span.querySelector(".rank");
                    if (_rank) {
                        let rank = _rank.textContent;
                    }
                });
            });
            const src = Array.from(tc).map(v => v.textContent);
            return src;
        }
        else {
            return [];
        }
    });
    yield browser.close();
    const ytp = {
        data: data
    };
    return ytp;
});
exports.gyt = gyt;
(0, exports.gyt)();

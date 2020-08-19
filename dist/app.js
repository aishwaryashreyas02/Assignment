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
const body_parser_1 = __importDefault(require("body-parser"));
const parser_1 = require("./parser");
const parser_2 = require("./parser");
const url_1 = __importDefault(require("url"));
const app = express_1.default();
const port = 8080;
app.use(body_parser_1.default.json({ type: 'application/json' }));
app.post('/api/*', (req, res) => {
    let data = req.body.data;
    let q = url_1.default.parse(req.url, true);
    let indicator = false;
    if (q.pathname.includes("v2")) {
        indicator = true;
    }
    const processV1Request = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let frameResponseData = yield parser_2.processDetails(data);
            let outputData = yield parser_1.formJsonData(frameResponseData, indicator);
            console.log("app.ts -- processV1Request function -- response : ", outputData);
            res.status(200).send({ data: outputData });
        }
        catch (err) {
            if (err) {
                res.status(400).send({ "errorMessage": err.message });
            }
        }
    });
    processV1Request().then();
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map
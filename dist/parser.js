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
Object.defineProperty(exports, "__esModule", { value: true });
exports.formJsonData = exports.processDetails = void 0;
function processDetails(data) {
    try {
        let limiter1 = "0000";
        let limiter2 = "000";
        let resultArray = [];
        let firstName = data.split(limiter1, 1).toString();
        resultArray.push(firstName);
        let nextPart = data.split(limiter1);
        let x = nextPart[1];
        let y = x.split(limiter2);
        let lastName = y[0];
        resultArray.push(lastName);
        let processClientId = y[1];
        resultArray.push(processClientId);
        let clientId = processClientId.slice(0, 3) + "-" + processClientId.slice(3);
        resultArray.push(clientId);
        console.log("parser.ts -- processDetails function -- resultArray : ", resultArray);
        return (resultArray);
    }
    catch (err) {
        throw new Error(err);
    }
}
exports.processDetails = processDetails;
exports.formJsonData = (data, versionIndicator) => __awaiter(void 0, void 0, void 0, function* () {
    let responseJson;
    if (versionIndicator) {
        responseJson = {
            "firstName": data[0],
            "lastName": data[1],
            "clientId": data[3]
        };
    }
    else {
        responseJson = {
            "firstName": data[0] + "0000",
            "lastName": data[1] + "000",
            "clientId": data[2]
        };
    }
    console.log("parser.ts -- formJsonData function : response : ", responseJson);
    return responseJson;
});
//# sourceMappingURL=parser.js.map
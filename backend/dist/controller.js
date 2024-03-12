"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJsonById = exports.updateJsonById = exports.postJson = exports.getJsons = void 0;
const http_status_1 = __importDefault(require("http-status"));
const service_1 = require("./service");
async function getJsons(req, res) {
    try {
        const jsons = service_1.service.getJson();
        return res.status(http_status_1.default.OK).send(jsons);
    }
    catch (error) {
        console.log(error);
    }
}
exports.getJsons = getJsons;
async function postJson(req, res) {
    try {
        const json = req.body;
        service_1.service.postJson(json);
        return res.status(http_status_1.default.CREATED).send(json);
    }
    catch (error) {
        console.log(error);
    }
}
exports.postJson = postJson;
async function updateJsonById(req, res) {
    try {
        const jsonUpdate = req.body;
        service_1.service.updateJsonById(jsonUpdate);
        return res.status(http_status_1.default.OK).send(jsonUpdate);
    }
    catch (error) {
        console.log(error);
    }
}
exports.updateJsonById = updateJsonById;
async function deleteJsonById(req, res) {
    try {
        const jsonDelete = req.body;
        service_1.service.deleteJsonById(jsonDelete);
        return res.status(http_status_1.default.OK).send(jsonDelete);
    }
    catch (error) {
        console.log(error);
    }
}
exports.deleteJsonById = deleteJsonById;

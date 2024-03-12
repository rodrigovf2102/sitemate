"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const repository_1 = require("./repository");
function getJson() {
    return repository_1.repository.getJsons();
}
function postJson(json) {
    return repository_1.repository.postJsons(json);
}
function updateJsonById(updateJson) {
    return repository_1.repository.updateJsonById(updateJson);
}
function deleteJsonById(jsonDelete) {
    return repository_1.repository.deleteJsonById(jsonDelete);
}
exports.service = {
    getJson,
    postJson,
    updateJsonById,
    deleteJsonById
};

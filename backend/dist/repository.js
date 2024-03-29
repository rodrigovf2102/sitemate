"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = void 0;
const jsons = [{
        id: "999",
        title: "TEST JSON",
        description: "THIS IS A TEST JSON"
    }];
function getJsonById(id) {
    return jsons.find(json => json.id === id);
}
function getJsons() {
    return jsons;
}
function postJsons(json) {
    return jsons.push(json);
}
function updateJsonById(updateJson) {
    const json = jsons.find(json => json.id === updateJson.id);
    const index = jsons.indexOf(json);
    jsons[index] = updateJson;
    return updateJson;
}
function deleteJsonById(deleteJson) {
    const json = jsons.find(json => json.id === deleteJson.id);
    const index = jsons.indexOf(json);
    jsons.splice(index, 1);
    return deleteJson;
}
exports.repository = {
    getJsons,
    getJsonById,
    postJsons,
    updateJsonById,
    deleteJsonById
};

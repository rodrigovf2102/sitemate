import { JsonObj } from "./protocols";
import { repository } from "./repository";

function getJson(){
    return repository.getJsons();
}

function postJson(json : JsonObj){
    return repository.postJsons(json);
}

function updateJsonById(updateJson : JsonObj){
    return repository.updateJsonById(updateJson);
}

function deleteJsonById(jsonDelete : JsonObj){
    return repository.deleteJsonById(jsonDelete);
}

export const service = {
    getJson,
    postJson,
    updateJsonById,
    deleteJsonById
}
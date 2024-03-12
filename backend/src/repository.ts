import { JsonObj } from "./protocols";

const jsons : JsonObj[] = [{
    id: "999",
    title: "TEST JSON",
    description: "THIS IS A TEST JSON"
}];

function getJsonById(id: string){
    return jsons.find(json => json.id === id);
}

function getJsons(){
    return jsons
}

function postJsons(json : JsonObj){
    return jsons.push(json);
}

function updateJsonById(updateJson : JsonObj){
    const json = jsons.find(json => json.id === updateJson.id);
    const index = jsons.indexOf(json);
    jsons[index] = updateJson;
    return updateJson;
}

function deleteJsonById(deleteJson : JsonObj){
    const json = jsons.find(json => json.id === deleteJson.id);
    const index = jsons.indexOf(json);
    jsons.splice(index,1);
    return deleteJson;
}

export const repository = {
    getJsons,
    getJsonById,
    postJsons,
    updateJsonById,
    deleteJsonById
}
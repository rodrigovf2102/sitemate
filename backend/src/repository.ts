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
    let json = jsons.find(json => json.id === updateJson.id);
    json = updateJson;
    return updateJson;
}

function deleteJsonById(deleteJsonById : JsonObj){
    const json = jsons.find(json => json.id === deleteJsonById.id);
    const index = jsons.indexOf(json);
    jsons.splice(index,1);
    return deleteJsonById;
}

export const repository = {
    getJsons,
    getJsonById,
    postJsons,
    updateJsonById,
    deleteJsonById
}